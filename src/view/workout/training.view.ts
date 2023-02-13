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

  async init(root: HTMLElement, trainingId: string) {
    this.trainingId = trainingId;

    this.createLayout(root);
    this.addHandlers();
  }

  createLayout(root: HTMLElement) {
    const { back, calorie } = getTrainingLang();
    const userTraining = profileController.getTraining(this.trainingId);
    if (!userTraining) return;

    const container = document.createElement("div");
    container.classList.add("wrapper", "t-training__wrapper");

    const training = document.createElement("div");
    training.classList.add("t-training__training");
    new Player().create(training, userTraining);

    const info = document.createElement("div");
    info.classList.add("t-training__info");

    const firstLine = document.createElement("div");

    this.layout.back = document.createElement("a");
    this.layout.back.classList.add(
      "button",
      "button--bordered",
      "t-training__back"
    );
    this.layout.back.textContent = `${back}`;
    (this.layout.back as HTMLAnchorElement).href =
      state.basePath + Routing.WORKOUT;

    const title = document.createElement("h2");
    title.classList.add("t-training__title");
    title.textContent = userTraining.title;

    firstLine.append(title, this.layout.back);
    firstLine.classList.add("t-training__first-line");

    const description = document.createElement("div");
    description.classList.add("t-training__desc");
    description.textContent = userTraining.description;

    const lastLine = document.createElement("div");
    lastLine.classList.add("t-training__last-line");

    const tags = document.createElement("div");
    tags.classList.add("t-training__tags");
    for (const tag of userTraining.tag) {
      const tagItem = document.createElement("div");
      tagItem.textContent = tag;
      tags.append(tagItem);
    }

    const calories = document.createElement("div");
    calories.classList.add("t-training__calories");
    calories.textContent = calorie + ": " + userTraining.calories.toString();

    lastLine.append(tags, calories);

    info.append(firstLine, description, lastLine);

    container.append(training, info);

    root.replaceChildren(container);
  }

  addHandlers() {
    this.watchProgress();

    this.layout.back.addEventListener("click", (e: Event) => {
      navigationController.route(e);
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
