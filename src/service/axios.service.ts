import { HttpUnionRequest } from "types/http.request.types";
import lang from "../lang/lang";

interface Request {
  method: "GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "PATCH";
}

interface AxiosRequest extends Request {
  path: string;
  body?: HttpUnionRequest;
}

interface FetchRequest extends Request {
  headers: Headers;
  body?: string;
  credentials: "omit" | "same-origin" | "include";
}

class AxiosService {
  async request({ path, method, body = undefined }: AxiosRequest) {
    const token = localStorage.getItem("accessToken");
    const request = {} as FetchRequest;

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=UTF-8");
    if (token) headers.append("Authorization", `Bearer: ${token}`);

    const language = lang.getLang();
    headers.append("Lang", `${language}`);

    let URL = path;
    if (method === "GET" && body) {
      URL += Object.values(body).pop();
    }

    request.headers = headers;
    request.method = method;
    request.credentials = "include";
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      request.body = JSON.stringify(body);
    }

    const response = await fetch(
      `https://rs-clone-back-production-9a28.up.railway.app/${URL}`,
      request
    );

    const accessToken = response.headers.get("X-Access-Token");
    if (accessToken) localStorage.setItem("accessToken", accessToken);

    const data = await response.json();

    return { ...data, status: response.status };
  }
}

export default new AxiosService();
