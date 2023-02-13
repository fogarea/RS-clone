import { state } from "store/state";
import { Routing } from "types/route.types";
import { getWorkoutLang } from "lang/workout/workout.lang";
import profileController from "controller/profile.controller";
import navigationController from "controller/navigation.controller";

class TrainingListView {
  async init(root: HTMLElement) {
    this.render(root);
    this.addHandlers(root);
  }

  render(root: HTMLElement) {
    const { open } = getWorkoutLang();
    const userProgram = profileController.program;
    if (!userProgram) return;

    for (const training of userProgram.trainings) {
      const trainingItem = document.createElement("div");

      const trainingLink = document.createElement("a");
      trainingLink.href = state.basePath + Routing.WORKOUT + "/" + training.id;
      trainingLink.textContent = `${open}`;

      trainingItem.append(trainingLink);
      root.append(trainingItem);
    }
  }

  addHandlers(root: HTMLElement) {
    root.addEventListener("click", (e: Event) => {
      if (!e.target) return;
      if (!(e.target instanceof HTMLAnchorElement)) return;

      navigationController.route(e);
    });
  }
}

export default new TrainingListView();
