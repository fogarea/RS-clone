import axios from "./axios.service";

class MealsService {
  async getAll() {
    return axios.request({
      path: "api/meals",
      method: "GET"
    });
  }
}

export default new MealsService();
