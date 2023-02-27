import { Layout } from "types/layout.types";
import profileController from "../../../controller/profile.controller";
import { Training } from "types/training.types";
import trainingCartView from "../../components/training.cart.view";
import { getTrainingCardLang } from "lang/training.card.lang";
import { getCompletedTrainingsLang } from "lang/dashboard/completed.trainings.lang";
import { getActiveTrainingsLang } from "lang/dashboard/active.trainings.lang";
import navigationModel from "../../../model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "../../../controller/navigation.controller";

class TrainingsListView {
  layout = {} as Layout;

  init(root: HTMLElement, completed?: string) {
    const trainings = completed
      ? profileController.completedTrainings
      : profileController.program?.trainings;

    if (trainings?.length) {
      this.createLayout(root, completed);
      this.renderTrainings(trainings);
    }
  }

  createLayout(root: HTMLElement, completed?: string) {
    const { title } = completed
      ? getCompletedTrainingsLang()
      : getActiveTrainingsLang();

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className =
      "active-trainings__wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "active-trainings__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "active-trainings__content";

    this.layout.wrapper.append(this.layout.title, this.layout.content);

    root.replaceChildren(this.layout.wrapper);
  }

  renderTrainings(trainings: Training[]) {
    const { btn } = getTrainingCardLang();

    trainings.forEach((training: Training) => {
      const route =
        navigationModel.createRoute(Routing.WORKOUT) + "/" + training.id;

      trainingCartView.render(this.layout.content, training, {
        text: `${btn}`,
        classes: "button--rounded",
        callback: () => navigationController.applyRoute(route)
      });
    });
  }
}

export default new TrainingsListView();
