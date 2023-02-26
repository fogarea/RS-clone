import { Routing } from "types/route.types";
import profileController from "controller/profile.controller";
import navigationController from "controller/navigation.controller";
import trainingCartView from "view/components/training.cart.view";
import navigationModel from "model/navigation.model";
import { getTrainingCardLang } from "lang/training.card.lang";

class TrainingListView {
  init(root: HTMLElement) {
    this.render(root);
    this.addHandlers(root);
  }

  render(root: HTMLElement) {
    const { btn } = getTrainingCardLang();
    const userProgram = profileController.program;
    if (!userProgram) return;

    for (const training of userProgram.trainings) {
      const route =
        navigationModel.createRoute(Routing.WORKOUT) + "/" + training.id;

      trainingCartView.render(root, training, {
        text: `${btn}`,
        classes: "button--rounded",
        callback: () => navigationController.applyRoute(route)
      });
    }
  }

  addHandlers(root: HTMLElement) {
    root.addEventListener("click", (e: MouseEvent) => {
      if (!e.target) return;
      if (!(e.target instanceof HTMLAnchorElement)) return;

      navigationController.route(e);
    });
  }
}

export default new TrainingListView();
