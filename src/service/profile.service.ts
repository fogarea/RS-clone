import axios from "service/axios.service";
import { HttpProfileRequest } from "types/http.request.types";

class ProfileService {
  async updateProfile(profile: HttpProfileRequest) {
    return axios.request({
      path: "api/profile",
      method: "PUT",
      body: profile
    });
  }
}

export default new ProfileService();
