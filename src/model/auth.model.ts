import { state } from "store/state";
import { User } from "types/user.types";
import EventEmitter from "utils/observer.utils";

class AuthModel extends EventEmitter {
  updateUserState(user: User) {
    state.user = { ...user };
  }
}

export default new AuthModel();
