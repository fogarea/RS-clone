import achievementsService from "../service/achievements.service";
import achievementsModel from "../model/achievements.model";
import { Achievements } from "types/achievements.types";
import { state } from "../store/state";

class AchievementsController {
  async updateAchievements(achievement: keyof Achievements, value: boolean) {
    if (state.user.achievements[achievement] !== value) {
      state.user.achievements[achievement] = value;

      const { status, achievements } =
        await achievementsService.updateAchievements({
          achievements: state.user.achievements
        });

      if (status === 403) return;

      if (status === 404) return;

      achievementsModel.updateAchievements({ ...achievements });
    }
  }
}

export default new AchievementsController();
