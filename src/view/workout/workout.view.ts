import { Layout } from "types/layout.types";
import trainingListView from "./training.list.view";
import profileController from "controller/profile.controller";
import { getWorkoutLang } from "lang/workout/workout.lang";
import button from "view/components/button";
import programsController from "controller/programs.controller";

class WorkoutView {
  layout = {} as Layout;

  async init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    const { change } = getWorkoutLang();
    const userProgram = profileController.program;
    if (!userProgram) return;

    const container = document.createElement("div");
    container.classList.add("wrapper");

    const header = document.createElement("div");
    header.classList.add("workout__header");

    const about = document.createElement("div");
    about.classList.add("workout__about");

    const title = document.createElement("h2");
    title.classList.add("workout__title");
    title.textContent = userProgram.title;

    const description = document.createElement("div");
    description.classList.add("workout__desc");
    description.textContent = userProgram.description;

    about.append(title, description);

    const actions = document.createElement("div");
    actions.classList.add("workout__actions");

    const changeBtn = document.createElement("div");
    changeBtn.classList.add("workout__change");
    button.render(
      changeBtn,
      "button--colored",
      `${change}`,
      programsController.redirectToPrograms
    );

    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("workout__media_container");

    const media = document.createElement("img");
    media.classList.add("workout__media");
    media.src = userProgram.media[0];

    mediaContainer.append(media);

    actions.append(changeBtn, mediaContainer);

    header.append(about, actions);

    this.layout.trainingsContainer = document.createElement("div");
    this.layout.trainingsContainer.classList.add("workout__trainings");

    container.append(header, this.layout.trainingsContainer);

    root.replaceChildren(container);
  }

  render() {
    trainingListView.init(this.layout.trainingsContainer);
  }
}

export default new WorkoutView();
