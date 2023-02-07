import { Layout } from "types/layout.types";
import promoView from "./promo/promo.view";
import goalsView from "./goals/goals.view";

class LandingView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    this.layout.promo = document.createElement("section");
    this.layout.promo.className = "promo";

    this.layout.goals = document.createElement("section");
    this.layout.goals.className = "goals";

    root.replaceChildren(this.layout.promo, this.layout.goals);
  }

  render() {
    promoView.init(this.layout.promo);
    goalsView.init(this.layout.goals);
  }
}

export default new LandingView();
