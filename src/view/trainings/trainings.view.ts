import { Layout } from "types/layout.types";
import trainingsContentView from "../trainings/content.view";
import { getTrainingsLang } from "../../lang/trainings.lang";

class TrainingsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    //this.addHandlers(root);
  }

  createLayout(root: HTMLElement) {
    const { title, subtitle } = getTrainingsLang();

    this.layout.section = document.createElement("section");
    this.layout.section.className = "trainings";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper trainings__wrapper";

    this.layout.title = document.createElement("h2");
    this.layout.title.className = "trainings__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.desc = document.createElement("p");
    this.layout.desc.className = "trainings__desc";
    this.layout.desc.innerText = `${subtitle}`;

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
