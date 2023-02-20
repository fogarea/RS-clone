import { Layout } from "types/layout.types";
import contentView from "../goals/content.view";

class GoalsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper goals__wrapper";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "goals__content";

    this.layout.button = document.createElement("div");
    this.layout.button.className = "goals__button";

    this.layout.wrapper.append(this.layout.content, this.layout.button);

    root.append(this.layout.wrapper);
  }

  render() {
    contentView.render(this.layout.content);
  }
}

export default new GoalsView();
