import { state } from "store/state";
import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import Player from "utils/player.utils";
import profileController from "controller/profile.controller";
import progressController from "controller/progress.controller";
import navigationController from "controller/navigation.controller";
import { getTrainingLang } from "lang/workout/training.lang";

class TrainingView {
  trainingId = "";

  layout = {} as Layout;

  init(root: HTMLElement, trainingId: string) {
    this.trainingId = trainingId;

    this.createLayout(root);
    this.renderBackButton();
    this.addHandlers();
  }

  createLayout(root: HTMLElement) {
    const { calorie } = getTrainingLang();
    const userTraining = profileController.getTraining(this.trainingId);
    if (!userTraining) return;

    this.layout.training = document.createElement("section");
    this.layout.training.className = "t-training wrapper";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className =
      "wrapper t-training__wrapper cards__container";

    this.layout.back = document.createElement("span");
    this.layout.back.className = "aside__back-btn";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "t-training__content";

    this.layout.video = document.createElement("div");
    this.layout.video.className = "t-training__video";
    new Player().create(this.layout.video, userTraining);

    this.layout.info = document.createElement("div");
    this.layout.info.className = "t-training__info";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "t-training__title title";
    this.layout.title.textContent = userTraining.title;

    this.layout.info.append(this.layout.title);

    this.layout.content.append(this.layout.video, this.layout.info);

    this.layout.description = document.createElement("div");
    this.layout.description.className = "t-training__desc";
    this.layout.description.textContent = userTraining.description;

    this.layout.tags = document.createElement("div");
    this.layout.tags.className = "t-training__tags tags";
    this.layout.tags.innerHTML = `<span class="tag tag--bordered">${userTraining.calories} ${calorie}</span>`;

    for (const tag of userTraining.tag) {
      this.layout.tags.innerHTML += `<span class="tag tag--bordered">${tag}</span>`;
    }

    this.layout.info.append(this.layout.description, this.layout.tags);

    this.layout.wrapper.append(this.layout.back, this.layout.content);

    this.layout.training.append(this.layout.wrapper);

    root.replaceChildren(this.layout.training);
  }

  renderBackButton() {
    const { back } = getTrainingLang();

    const icon = document.createElement("span");
    icon.className = "icon icon--arrow";

    const backBtn = document.createElement("a");
    backBtn.textContent = `${back}`;
    backBtn.href = state.basePath + Routing.WORKOUT;

    this.layout.back.append(icon, backBtn);
  }

  addHandlers() {
    this.watchProgress();

    this.layout.back.addEventListener("click", (e: MouseEvent) => {
      if (e.target instanceof HTMLSpanElement) {
        const route = (e.target.nextElementSibling as HTMLAnchorElement).href;
        navigationController.applyRoute(route);
      }
      if (e.target instanceof HTMLAnchorElement) {
        navigationController.route(e);
      }
    });
  }

  watchProgress() {
    setTimeout(() => {
      progressController.watchProgress();
      this.watchProgress();
    }, 30000);
  }
}

export default new TrainingView();
