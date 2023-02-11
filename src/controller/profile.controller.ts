import profileService from "../service/profile.service";
import { HttpProfileRequest } from "types/http.request.types";
import profileModel from "../model/profile.model";
import { state } from "../store/state";
import authController from "./auth.controller";
import programsController from "./programs.controller";

class ProfileController {
  async createProfile(profileReq: HttpProfileRequest) {
    const { status, ...profile } = await profileService.updateProfile(
      profileReq
    );

    if (status === 403) return;

    if (status === 404) return;

    profileModel.updateProfile({ ...profile });

    programsController.redirectToPrograms();
  }

  async createProgram(programId: string) {
    const { status, ...program } = await profileService.updateProfile({
      _id: state.user.profile.id,
      program: programId
    });

    if (status === 403) return;

    if (status === 404) return;

    profileModel.updateProfile({ ...program });

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
