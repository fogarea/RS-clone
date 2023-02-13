import { Routing } from "types/route.types";
import { getWorkoutLang } from "lang/workout/workout.lang";
import profileController from "controller/profile.controller";
import navigationController from "controller/navigation.controller";
import trainingCartView from "view/components/training.cart.view";
import navigationModel from "model/navigation.model";

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
      const route =
        navigationModel.createRoute(Routing.WORKOUT) + "/" + training.id;

      trainingCartView.render(root, training, {
        text: `${open}`,
        classes: "button--rounded",
        callback: () => navigationController.applyRoute(route)
      });
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
