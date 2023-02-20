import { HttpGoalsRequest } from "types/http.request.types";
import goalsService from "../service/goals.service";
import goalsModel from "../model/goals.model";
import achievementsController from "./achievements.controller";
import { Achievements } from "types/achievements.types";

class GoalsController {
  async updateGoals(goalsReq: HttpGoalsRequest) {
    const { status, goals } = await goalsService.updateGoals(goalsReq);

    if (status === 403) return;

    if (status === 404) return;

    goalsModel.updateGoals({ ...goals });

    goalsModel.emit("goals.update");

    await this.updateGoalsAchievement();
  }

  async updateGoalsAchievement() {
    await achievementsController.updateAchievements(
      "water" as keyof Achievements,
      true
    );
  }
}

export default new GoalsController();
