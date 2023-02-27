import { Layout } from "types/layout.types";
import trainingListView from "./training.list.view";
import { getTrainingListLang } from "lang/workout/training.list.lang";

class WorkoutsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    const { title } = getTrainingListLang();
    this.layout.workouts = document.createElement("section");
    this.layout.workouts.className = "workouts wrapper";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "workouts__wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "workouts__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "workouts__content";

    this.layout.wrapper.append(this.layout.title, this.layout.content);
    this.layout.workouts.append(this.layout.wrapper);

    root.replaceChildren(this.layout.workouts);
  }

  render() {
    trainingListView.init(this.layout.content);
  }
}

export default new WorkoutsView();
