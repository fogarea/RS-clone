import authModel from "model/auth.model";
import navigationModel from "model/navigation.model";
import authService from "service/auth.service";
import {
  HttpLoginRequest,
  HttpRegisterRequest
} from "types/http.request.types";
import navigationController from "./navigation.controller";

class AuthController {
  async register(request: HttpRegisterRequest) {
    const { _id: id } = await authService.register(request);

    if (id) await this.login(request);
  }

  async login(request: HttpLoginRequest) {
    const { _id: id, login, status } = await authService.login(request);

    if (status === 403) return;

    if (status === 404) return;

    authModel.updateUserState({
      authorized: true,
      id,
      login
    });

    navigationController.applyRoute(navigationModel.createRoute());
    authModel.emit("auth.update.header");
  }

  async autoLogin() {
    const { id, login } = await authService.autoLogin();

    if (id) {
      authModel.updateUserState({
        authorized: true,
        id,
        login
      });
    }
  }

  logout() {
    localStorage.removeItem("accessToken");
    authModel.updateUserState({
      authorized: false,
      id: "",
      login: ""
    });
    authModel.emit("auth.update");
  }
}

export default new AuthController();
