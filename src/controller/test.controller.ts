import axios from "service/axios.service";
import { HttpTestRequest } from "types/http.request.types";

class TestController {
  async test(request: HttpTestRequest) {
    const response = await axios.request({
      path: "api/posts",
      method: "POST",
      body: request
    });
    console.log("Test", response);
  }
}

export default new TestController();
