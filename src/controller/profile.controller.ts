import profileService from "../service/profile.service";
import { HttpProfileRequest, HttpUserRequest } from "types/http.request.types";
import { state } from "../store/state";
import authController from "./auth.controller";
import programsController from "./programs.controller";
import profileModel from "../model/profile.model";
import { Training } from "types/training.types";

class ProfileController {
  async createProfile(profileReq: HttpProfileRequest) {
    const { status, ...profile } = await profileService.updateProfile(
      profileReq
    );

    if (status === 403) return profile;
    if (status === 404) return profile;

    profileModel.updateProfile({ ...profile });

    programsController.redirectToPrograms();

    return profile;
  }

  async updateProfile(profileReq: HttpProfileRequest) {
    const { status, ...profile } = await profileService.updateProfile(
      profileReq
    );

    if (status === 403) return profile;
    if (status === 404) return profile;

    profileModel.updateProfile({ ...profile });

    return profile;
  }

  async updateProfileCredentials(credentialsReq: HttpUserRequest) {
    const { status, ...credentials } = await profileService.updateCredentials(
      credentialsReq
    );

    if (status === 403) return credentials;
    if (status === 404) return credentials;

    profileModel.updateProfileCredentials({ ...credentials });

    return credentials;
  }

  async createProgram(programId: string) {
    const { status, ...program } = await profileService.updateProfile({
      _id: state.user.profile.id,
      program: programId
    });

    if (status === 403) return program;
    if (status === 404) return program;

    profileModel.updateProfile({ ...program });

    await authController.autoLogin();
    authController.redirectToHome();

    return program;
  }

  get program() {
    const currentProgram = state.user.profile.program || "";
    return state.programs.find((program) => program.id === currentProgram);
  }

  getTraining(currentTraining: string) {
    const currentProgram = state.user.profile.program || "";
    return state.programs
      .find((program) => program.id === currentProgram)
      ?.trainings.find((training) => training.id === currentTraining);
  }

  get completedTrainings() {
    return this.program?.trainings.reduce((acc: Training[], training) => {
      if (state.user.progress.finished.includes(training.id))
        acc.push(training);
      return acc;
    }, []);
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
