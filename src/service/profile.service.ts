import axios from "service/axios.service";
import { HttpProfileRequest, HttpUserRequest } from "types/http.request.types";
import { state } from "../store/state";

class ProfileService {
  async updateProfile(profile: HttpProfileRequest) {
    return axios.request({
      path: "api/profile",
      method: "PUT",
      body: profile
    });
  }

  async updateCredentials(credentials: HttpUserRequest) {
    return axios.request({
      path: `auth/edit/${state.user.id}`,
      method: "PATCH",
      body: credentials
    });
  }
}

export default new ProfileService();
