import { Layout } from "types/layout.types";
import profileView from "./profile.view";
import physiqueView from "./physique.view";
import programView from "./program.view";
import otherView from "./other.view";

class AsideView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    this.layout.profile = document.createElement("section");
    this.layout.profile.className = "profile";

    this.layout.physique = document.createElement("section");
    this.layout.physique.className = "physique";

    this.layout.program = document.createElement("section");
    this.layout.program.className = "program";

    this.layout.other = document.createElement("section");
    this.layout.other.className = "other";

    root.replaceChildren(
      this.layout.profile,
      this.layout.physique,
      this.layout.program,
      this.layout.other
    );
  }

  render() {
    profileView.render(this.layout.profile);
    physiqueView.render(this.layout.physique);
    programView.render(this.layout.program);
    otherView.render(this.layout.other);
  }
}

export default new AsideView();
