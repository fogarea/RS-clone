import axios from "service/axios.service";
import { HttpMeditationRequest } from "types/http.request.types";

class MeditationService {
  async create(request: HttpMeditationRequest) {
    return axios.request({
      path: "api/meditations",
      method: "POST",
      body: request
    });
  }

  async update(request: HttpMeditationRequest) {
    return axios.request({
      path: "api/meditations",
      method: "PUT",
      body: request
    });
  }

  async delete(id: string) {
    return axios.request({
      path: `api/meditations/${id}`,
      method: "DELETE"
    });
  }

  async getTracks() {
    return axios.request({
      path: `api/tracks`,
      method: "GET"
    });
  }
}

export default new MeditationService();
