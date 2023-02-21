import { Layout } from "types/layout.types";
import profileController from "../../../controller/profile.controller";
import { Training } from "types/training.types";
import trainingCartView from "../../components/training.cart.view";
import { getProfileTrainingsLang } from "lang/profile/trainings.profile.lang";
import { getTrainingCardLang } from "lang/training.card.lang";
import navigationModel from "../../../model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "../../../controller/navigation.controller";

class TodayView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.renderTrainings();
  }

  createLayout(root: HTMLElement) {
    const { title } = getProfileTrainingsLang();
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "today__wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "today__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "today__content";

    this.layout.wrapper.append(this.layout.title, this.layout.content);

    root.replaceChildren(this.layout.wrapper);
  }

  renderTrainings() {
    if (profileController.program?.trainings) {
      const { btn } = getTrainingCardLang();

      profileController.program.trainings.forEach((training: Training) => {
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
}

export default new TodayView();
