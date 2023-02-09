import authModel from "model/auth.model";
import navigationModel from "model/navigation.model";
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
    const { id, status } = await authService.register(request);

    if (status === 403) return;

    if (status === 404) return;

    if (id) await this.login(request);

    const route = navigationModel.createRoute(Routing.COMPLETE);
    navigationController.applyRoute(route);
  }

  async login(request: HttpLoginRequest) {
    const { id, email, name, surname, phone, profile, progress, status } =
      await authService.login(request);

    if (status === 403) return;

    if (status === 404) return;

    authModel.updateUserState({
      authorized: true,
      id,
      email,
      name,
      surname,
      phone,
      profile,
      progress
    });
  }

  async autoLogin() {
    const { id, email, name, surname, phone, profile, progress } =
      await authService.autoLogin();

    if (id) {
      authModel.updateUserState({
        authorized: true,
        id,
        email,
        name,
        surname,
        phone,
        profile,
        progress
      });
    }
  }

  redirectToHome() {
    const route = navigationModel.createRoute(Routing.DASHBOARD);
    navigationController.applyRoute(route);
    authModel.emit("auth.update.header");
  }

  logout() {
    localStorage.removeItem("trainings");
    localStorage.removeItem("accessToken");
    authModel.updateUserState(initialUser);
    const route = navigationModel.createRoute(Routing.LANDING);
    navigationController.applyRoute(route);

    authModel.emit("auth.update.header");
  }
}

export default new AuthController();
