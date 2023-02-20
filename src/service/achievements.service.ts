import axios from "service/axios.service";
import { HttpAchievementsRequest } from "types/http.request.types";
import { state } from "../store/state";

class AchievementsService {
  async updateAchievements(achievements: HttpAchievementsRequest) {
    return axios.request({
      path: `auth/edit/${state.user.id}`,
      method: "PATCH",
      body: achievements
    });
  }
}

export default new AchievementsService();
