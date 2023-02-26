import profileController from "../../../controller/profile.controller";
import { Layout } from "types/layout.types";
import programCartView from "../../components/program.cart.view";
import { Program } from "types/program.types";
import { getProfileProgramLang } from "../../../lang/profile/program.profile.lang";
import { state } from "../../../store/state";
import { Routing } from "types/route.types";
import navigationController from "../../../controller/navigation.controller";

class ProgramView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderEditLink();
    this.addHandler();
  }

  addHandler() {
    this.layout.wrapper.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "A" || target.tagName === "SPAN") {
        navigationController.route(event);
      }
    });
  }

  createLayout(root: HTMLElement) {
    const { title } = getProfileProgramLang();

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "program__wrapper cards__container";

    this.layout.top = document.createElement("div");
    this.layout.top.className = "program__top card__top";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "program__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.edit = document.createElement("span");
    this.layout.edit.className = "aside__edit-link card__edit-btn";

    this.layout.top.append(this.layout.title, this.layout.edit);

    this.layout.wrapper.append(this.layout.top);

    if (profileController.program)
      this.renderProgram(profileController.program);

    root.replaceChildren(this.layout.wrapper);
  }

  renderProgram(program: Program) {
    programCartView.render(this.layout.wrapper, program);
  }

  renderEditLink() {
    const { btn } = getProfileProgramLang();

    const editLink = document.createElement("a");
    editLink.textContent = `${btn}`;
    editLink.href = state.basePath + Routing.PROGRAMS;

    this.layout.edit.append(editLink);
  }
}

export default new ProgramView();
