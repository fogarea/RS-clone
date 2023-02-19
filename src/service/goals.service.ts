import axios from "service/axios.service";
import { HttpGoalsRequest } from "types/http.request.types";
import { state } from "../store/state";

class GoalsService {
  async updateGoals(goals: HttpGoalsRequest) {
    return axios.request({
      path: `auth/edit/${state.user.id}`,
      method: "PATCH",
      body: goals
    });
  }
}

export default new GoalsService();
