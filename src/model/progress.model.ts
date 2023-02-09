import { state } from "store/state";
import { Progress } from "types/progress.types";

class ProgressModel {
  update(progress: Progress) {
    state.user.progress = { ...progress };
  }
}

export default new ProgressModel();
