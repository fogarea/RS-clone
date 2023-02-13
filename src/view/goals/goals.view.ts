import { Layout } from "types/layout.types";

class GoalsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "goals__wrapper wrapper";
    this.layout.wrapper.innerText = "Goals Edit";

    root.replaceChildren(this.layout.wrapper);
  }
}

export default new GoalsView();
