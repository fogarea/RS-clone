import axios from "./axios.service";

class ProgramsService {
  async getAll() {
    return axios.request({
      path: "api/programs",
      method: "GET"
    });
  }
}

export default new ProgramsService();
