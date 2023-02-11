import { state } from "store/state";
import { Profile } from "types/user.types";
import EventEmitter from "utils/observer.utils";
import { HttpUserRequest } from "types/http.request.types";

class ProfileModel extends EventEmitter {
  updateProfile(profile: Profile) {
    state.user.profile = { ...profile };
  }

  updateProfileCredentials(credentials: HttpUserRequest) {
    state.user.name = credentials.name;
    state.user.surname = credentials.surname;
    state.user.avatar = credentials.avatar;
    state.user.phone = credentials.phone;
  }
}

export default new ProfileModel();
