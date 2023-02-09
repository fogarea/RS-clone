import progressModel from "model/progress.model";
import progressService from "service/progress.service";
import { state } from "store/state";
import { HttpProgressRequest } from "types/http.request.types";
import { Progress } from "types/progress.types";
import { Trainings } from "types/training.types";

class ProgressController {
  finishTraning(id: string) {
    const progress = { ...state.user.progress };
    progress.finished.push(id);
    progressModel.update(progress);

    progressService.update(this.createHttpProgress(progress));
  }

  updateProgress(watched: number, calories: number) {
    const progress = { ...state.user.progress };
    progress.watched += watched;
    progress.calories += calories;
    progressModel.update(progress);

    progressService.update(this.createHttpProgress(progress));
  }

  private createHttpProgress(progress: Progress): HttpProgressRequest {
    return {
      _id: progress.id,
      watched: progress.watched,
      calories: progress.calories,
      finished: [...progress.finished.filter((v, i, a) => a.indexOf(v) === i)]
    };
  }

  watchProgress() {
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
      this.updateProgress(watched, calories);
      localStorage.setItem("trainings", JSON.stringify(trainings));
    }
  }
}

export default new ProgressController();
