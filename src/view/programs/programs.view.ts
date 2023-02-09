import { Layout } from "types/layout.types";
import { getProgramsUnAuthLang } from "../../lang/programs/programs.un.auth.lang";
import programContentVew from "./content.view";
import { state } from "../../store/state";
import { getProgramsAuthLang } from "../../lang/programs/programs.auth.lang";
import profileController from "../../controller/profile.controller";

class ProgramsView {
  layout = {} as Layout;

  async init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandlers();
  }

  createLayout(root: HTMLElement) {
    const { title, subtitle } = state.user.authorized
      ? getProgramsAuthLang()
      : getProgramsUnAuthLang();

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

  addHandlers() {
    const programs = document.querySelector(".programs");
    programs?.addEventListener("click", async (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.tagName === "BUTTON")
        await profileController.createProgram(target.id);
    });
  }
}

export default new ProgramsView();
