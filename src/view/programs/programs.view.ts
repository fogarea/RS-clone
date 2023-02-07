import { Layout } from "types/layout.types";
import { getProgramsLang } from "../../lang/programs.lang";
import programContentVew from "./content.view";
import programsController from "../../controller/programs.controller";

class ProgramsView {
  layout = {} as Layout;

  async init(root: HTMLElement) {
    this.createLayout(root);

    await programsController.getAll();
    this.render();
    //this.addHandlers(root);
  }

  createLayout(root: HTMLElement) {
    const { title, subtitle } = getProgramsLang();

    this.layout.section = document.createElement("section");
    this.layout.section.className = "programs";

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
    programContentVew.render(this.layout.content);
  }
}

export default new ProgramsView();
