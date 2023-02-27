import { Layout } from "types/layout.types";
import { getProgramsUnAuthLang } from "lang/programs/programs.un.auth.lang";
import programContentVew from "./content.view";
import { state } from "../../store/state";
import { getProgramsAuthLang } from "lang/programs/programs.auth.lang";
import profileController from "../../controller/profile.controller";
import loading from "utils/loading";

class ProgramsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
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
    this.layout.content.className = "trainings__content";

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
    this.layout.content.addEventListener("click", async (e: Event) => {
      const target = e.target as HTMLElement;
      const id = target.id;

      if (target.tagName === "BUTTON") {
        loading.globalOn(document.querySelector(".main"));
        await profileController.createProgram(id);
        loading.globalOff();
      }
    });
  }
}

export default new ProgramsView();
