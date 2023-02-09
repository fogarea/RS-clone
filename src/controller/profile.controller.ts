import profileService from "../service/profile.service";
import { HttpProfileRequest } from "types/http.request.types";
import navigationModel from "../model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "./navigation.controller";
import profileModel from "../model/profile.model";
import { state } from "../store/state";
import authController from "./auth.controller";

class ProfileController {
  async createProfile(profile: HttpProfileRequest) {
    const { id, height, weight, gender, birthday, status } =
      await profileService.updateProfile(profile);

    if (status === 403) return;

    if (status === 404) return;

    profileModel.updateProfile({
      id,
      height,
      weight,
      gender,
      birthday
    });

    const route = navigationModel.createRoute(Routing.PROGRAMS);
    navigationController.applyRoute(route);
  }

  async createProgram(programId: string) {
    const profile: HttpProfileRequest = {
      _id: state.user.profile.id,
      program: programId
    };

    const { id, height, weight, gender, birthday, program, status } =
      await profileService.updateProfile(profile);

    if (status === 403) return;

    if (status === 404) return;

    profileModel.updateProfile({
      id,
      height,
      weight,
      gender,
      birthday,
      program
    });

    await authController.autoLogin();
    authController.redirectToHome();
  }

  get program() {
    const currentProgram = state.user.profile.program || "";
    return state.programs.find((program) => program.id === currentProgram);
  }

  get isCompletedReg() {
    return (
      !state.user.authorized ||
      (state.user.authorized && state.user.profile?.birthday)
    );
  }

  get isSelectedProgram() {
    return (
      !state.user.authorized ||
      (state.user.authorized && state.user.profile?.program)
    );
  }
}

export default new ProfileController();
