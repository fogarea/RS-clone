import { state } from "store/state";
import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import Player from "utils/player.utils";
import profileController from "controller/profile.controller";
import progressController from "controller/progress.controller";
import navigationController from "controller/navigation.controller";
import { getWorkoutLang } from "lang/workout/workout.lang";

class TrainingView {
  trainingId = "";

  layout = {} as Layout;

  async init(root: HTMLElement, trainingId: string) {
    this.trainingId = trainingId;

    this.createLayout(root);
    this.addHandlers();
  }

  createLayout(root: HTMLElement) {
    const { back } = getWorkoutLang();
    const userTraining = profileController.getTraining(this.trainingId);
    if (!userTraining) return;

    const container = document.createElement("div");

    this.layout.back = document.createElement("a");
    this.layout.back.textContent = `${back}`;
    (this.layout.back as HTMLAnchorElement).href =
      state.basePath + Routing.WORKOUT;

    const training = document.createElement("div");
    new Player().create(training, userTraining);

    const title = document.createElement("div");
    title.textContent = userTraining.title;

    const description = document.createElement("div");
    description.textContent = userTraining.description;

    const tags = document.createElement("div");
    for (const tag of userTraining.tag) {
      const tagItem = document.createElement("div");
      tagItem.textContent = tag;
      tags.append(tagItem);
    }

    const calories = document.createElement("div");
    calories.textContent = userTraining.calories.toString();

    container.append(
      this.layout.back,
      training,
      title,
      description,
      tags,
      calories
    );

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
