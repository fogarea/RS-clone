import { Layout } from "types/layout.types";
import asideView from "./aside/aside.view";
import contentView from "./content/content.view";

class ProfileWrapperView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "cards wrapper";

    this.layout.aside = document.createElement("aside");
    this.layout.aside.className = "aside";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "content";

    this.layout.wrapper.append(this.layout.aside, this.layout.content);

    root.replaceChildren(this.layout.wrapper);
  }

  render() {
    asideView.init(this.layout.aside);
    contentView.init(this.layout.content);
  }
}

export default new ProfileWrapperView();
