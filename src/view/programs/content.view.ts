import { state } from "store/state";
import programCartView from "../components/program.cart.view";
import { getProgramsAuthLang } from "lang/programs/programs.auth.lang";

class ProgramsContentView {
  render(root: HTMLElement) {
    const { btn } = getProgramsAuthLang();
    state.programs.forEach((program) => {
      state.user.authorized
        ? programCartView.render(root, program, {
            text: `${btn}`,
            classes: "button--rounded"
          })
        : programCartView.render(root, program);
    });
  }
}

export default new ProgramsContentView();
