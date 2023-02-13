import { Layout } from "types/layout.types";
import trainingListView from "./training.list.view";
import profileController from "controller/profile.controller";

class WorkoutView {
  layout = {} as Layout;

  async init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    const userProgram = profileController.program;
    if (!userProgram) return;

    const container = document.createElement("div");

    const title = document.createElement("div");
    title.textContent = userProgram.title;

    const description = document.createElement("div");
    description.textContent = userProgram.description;

    this.layout.trainingsContainer = document.createElement("div");

    container.append(title, description, this.layout.trainingsContainer);

    root.replaceChildren(container);
  }

  render() {
    trainingListView.init(this.layout.trainingsContainer);
  }
}

export default new WorkoutView();
