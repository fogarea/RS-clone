import { Trainings } from "types/training.types";

class ProgressController {
  finishTraning(id: string) {
    console.log(`update user Progress, add ${id} to 'finished'`);
  }

  updateProgress(watched: number, calories: number) {
    console.log(
      `update user Progress, increase 'watched' by ${watched} and 'calories' by ${calories}`
    );
  }

  watchProgress() {
    let watched = 0;
    let calories = 0;

    const trainings: Trainings = JSON.parse(
      localStorage.getItem("tranings") || "{}"
    );

    for (const id in trainings) {
      watched += trainings[id].watchedTime;
      calories += trainings[id].calories;

      trainings[id].watchedTime = 0;
      trainings[id].calories = 0;
    }

    if (watched || calories) {
      this.updateProgress(watched, calories);
      localStorage.setItem("tranings", JSON.stringify(trainings));
    }
  }
}

export default new ProgressController();
