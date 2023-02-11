import profileController from "../../../controller/profile.controller";
import { Layout } from "types/layout.types";
import programCartView from "../../components/program.cart.view";
import { Program } from "types/program.types";
import programsController from "../../../controller/programs.controller";
import { getProfileProgramLang } from "../../../lang/profile/program.profile.lang";

class ProgramView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
  }

  createLayout(root: HTMLElement) {
    const { title } = getProfileProgramLang();

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "program__wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "program__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.wrapper.append(this.layout.title);

    if (profileController.program)
      this.renderProgram(profileController.program);

    root.replaceChildren(this.layout.wrapper);
  }

  renderProgram(program: Program) {
    const { btn } = getProfileProgramLang();

    programCartView.render(this.layout.wrapper, program, {
      text: `${btn}`,
      classes: "button--rounded",
      callback: programsController.redirectToPrograms
    });
  }
}

export default new ProgramView();
