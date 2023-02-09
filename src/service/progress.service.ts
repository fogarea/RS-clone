import { HttpProgressRequest } from "types/http.request.types";
import axios from "./axios.service";

class ProgramsService {
  async update(progress: HttpProgressRequest) {
    return axios.request({
      path: "api/progress",
      method: "PUT",
      body: progress
    });
  }
}

export default new ProgramsService();
