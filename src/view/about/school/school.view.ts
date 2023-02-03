import { Layout } from "types/layout.types";
import schoolContentView from "./content.view";

class SchoolView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    //this.addHandlers(root);
  }

  createLayout(root: HTMLElement) {
    this.layout.section = document.createElement("section");
    this.layout.section.className = "school";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper school__wrapper";

    this.layout.title = document.createElement("h2");
    this.layout.title.className = "school__title title";
    this.layout.title.innerText = "Our School";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "school__content";

    this.layout.section.append(this.layout.wrapper);
    this.layout.wrapper.append(this.layout.title, this.layout.content);

    root.append(this.layout.section);
  }

  render() {
    schoolContentView.render(this.layout.content);
  }
}

export default new SchoolView();
