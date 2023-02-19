import { state } from "store/state";
import EventEmitter from "utils/observer.utils";
import { Goals } from "types/goals.types";

class GoalsModel extends EventEmitter {
  updateGoals(goals: Goals) {
    state.user.goals = { ...goals };
  }
}

export default new GoalsModel();
