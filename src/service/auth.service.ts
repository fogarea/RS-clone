import axios from "service/axios.service";
import {
  HttpLoginRequest,
  HttpRegisterRequest
} from "types/http.request.types";

class AuthService {
  async register(request: HttpRegisterRequest) {
    return axios.request({
      path: "auth/register",
      method: "POST",
      body: request
    });
  }

  async login(request: HttpLoginRequest) {
    return axios.request({
      path: "auth/login",
      method: "POST",
      body: request
    });
  }

  async autoLogin() {
    return axios.request({
      path: "auth/user",
      method: "GET"
    });
  }
}

export default new AuthService();
