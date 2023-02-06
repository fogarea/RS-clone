import { Layout } from "types/layout.types";
import aboutContentView from "./content.view";
import schoolView from "./school/school.view";
import { getAboutLang } from "../../lang/about.lang";

class AboutView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render(root);
    //this.addHandlers(root);
  }

  createLayout(root: HTMLElement) {
    const { title } = getAboutLang();

    this.layout.section = document.createElement("section");
    this.layout.section.className = "team";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper team__wrapper";

    this.layout.title = document.createElement("h2");
    this.layout.title.className = "team__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.content = document.createElement("div");
    this.layout.content.className =
      "team__content layout-3-columns team-member__wrapper";

    this.layout.section.append(this.layout.wrapper);
    this.layout.wrapper.append(this.layout.title, this.layout.content);

    root.replaceChildren(this.layout.section);
  }

  render(root: HTMLElement) {
    aboutContentView.render(this.layout.content);
    schoolView.init(root);
  }
}

export default new AboutView();
