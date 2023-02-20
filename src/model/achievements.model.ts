import { state } from "store/state";
import EventEmitter from "utils/observer.utils";
import { Achievements } from "types/achievements.types";

class AchievementsModel extends EventEmitter {
  updateAchievements(achievements: Achievements) {
    state.user.achievements = { ...achievements };
  }
}

export default new AchievementsModel();
