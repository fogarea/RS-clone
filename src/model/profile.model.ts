import { state } from "store/state";
import { Profile } from "types/user.types";
import EventEmitter from "utils/observer.utils";

class ProfileModel extends EventEmitter {
  updateProfile(profile: Profile) {
    state.user.profile = { ...profile };
  }
}

export default new ProfileModel();
