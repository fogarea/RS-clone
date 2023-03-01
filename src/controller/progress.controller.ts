import progressModel from "model/progress.model";
import progressService from "service/progress.service";
import { state } from "store/state";
import { HttpProgressRequest } from "types/http.request.types";
import { Progress } from "types/progress.types";
import { Trainings } from "types/training.types";
import achievementsController from "./achievements.controller";
import { Achievements } from "types/achievements.types";

class ProgressController {
  async finishTraining(id: string) {
    const progress = { ...state.user.progress };
    progress.finished.push(id);
    progressModel.update(progress);

    await progressService.update(this.createHttpProgress(progress));
    await this.updateProgressAchievement();
  }

  async updateProgress(watched: number, calories: number) {
    const progress = { ...state.user.progress };
    progress.watched += watched;
    progress.calories += calories;
    progressModel.update(progress);

    await progressService.update(this.createHttpProgress(progress));

    await this.updateCaloriesAchievement();
  }

  private createHttpProgress(progress: Progress): HttpProgressRequest {
    return {
      _id: progress.id,
      watched: progress.watched,
      calories: progress.calories,
      finished: [...progress.finished.filter((v, i, a) => a.indexOf(v) === i)]
    };
  }

  async watchProgress() {
    let watched = 0;
    let calories = 0;

    const trainings: Trainings = JSON.parse(
      localStorage.getItem("trainings") || "{}"
    );

    for (const id in trainings) {
      watched += trainings[id].watchedTime;
      calories += trainings[id].calories;

      trainings[id].watchedTime = 0;
      trainings[id].calories = 0;
    }

    if (watched || calories) {
      await this.updateProgress(watched, calories);
      localStorage.setItem("trainings", JSON.stringify(trainings));
    }
  }

  async updateProgressAchievement() {
    await achievementsController.updateAchievements(
      "dumbbells" as keyof Achievements,
      true
    );
  }

  async updateCaloriesAchievement() {
    await achievementsController.updateAchievements(
      "fire" as keyof Achievements,
      true
    );
  }
}

export default new ProgressController();
