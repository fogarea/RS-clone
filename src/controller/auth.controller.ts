import authModel from "model/auth.model";
import authService from "service/auth.service";
import {
  HttpLoginRequest,
  HttpRegisterRequest
} from "types/http.request.types";
import navigationController from "./navigation.controller";
import { Routing } from "types/route.types";
import { initialUser } from "store/state";

class AuthController {
  async register(request: HttpRegisterRequest) {
    const { status, ...user } = await authService.register(request);

    if (status === 403) return;

    if (status === 404) return;

    if (user.id) await this.login(request);

    navigationController.createRoute(Routing.COMPLETE);
  }

  async login(request: HttpLoginRequest) {
    const { status, ...user } = await authService.login(request);

    console.log("user", user);

    if (status === 403) return;

    if (status === 404) return;

    authModel.updateUserState({ authorized: true, ...user });
  }

  async autoLogin() {
    const user = await authService.autoLogin();
    if (user.id) authModel.updateUserState({ authorized: true, ...user });
  }

  redirectToHome() {
    navigationController.createRoute(Routing.MAIN);
    this.headerUpdate();
  }

  logout() {
    localStorage.removeItem("trainings");
    localStorage.removeItem("accessToken");
    authModel.updateUserState(initialUser);

    this.headerUpdate();
  }

  headerUpdate() {
    authModel.emit("auth.update.header");
  }
}

export default new AuthController();
