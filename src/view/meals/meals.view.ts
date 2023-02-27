import { Layout } from "types/layout.types";
import { state } from "../../store/state";
import mealsListView from "./meals.list.view";

class MealsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    this.layout.mealsWrapper = document.createElement("div");
    this.layout.mealsWrapper.className = "meals__wrapper wrapper";

    root.replaceChildren(this.layout.mealsWrapper);
  }

  render() {
    for (const [key, value] of Object.entries(state.meals)) {
      mealsListView.init(this.layout.mealsWrapper, key, value);
    }
  }
}

export default new MealsView();
