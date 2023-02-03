import { Layout } from "types/layout.types";
import trainingsContentView from "../trainings/content.view";

class TrainingsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    //this.addHandlers(root);
  }

  createLayout(root: HTMLElement) {
    this.layout.section = document.createElement("section");
    this.layout.section.className = "trainings";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper trainings__wrapper";

    this.layout.title = document.createElement("h2");
    this.layout.title.className = "trainings__title title";
    this.layout.title.innerText = "Available training sessions";

    this.layout.desc = document.createElement("p");
    this.layout.desc.className = "trainings__desc";
    this.layout.desc.innerText =
      "Try our training programs. You can choose training program for your goal";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "trainings__content layout-3-columns";

    this.layout.section.append(this.layout.wrapper);
    this.layout.wrapper.append(
      this.layout.title,
      this.layout.desc,
      this.layout.content
    );

    root.replaceChildren(this.layout.section);
  }

  render() {
    trainingsContentView.render(this.layout.content);
  }
}

export default new TrainingsView();
