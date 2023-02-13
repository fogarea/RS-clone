import { Layout } from "types/layout.types";
import trainingsView from "./trainings/trainings.view";
import todayMealsView from "./today.meals.view";
import goalsView from "./goals.view";

class DashboardView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "dashboard-cards wrapper";

    root.replaceChildren(this.layout.wrapper);
  }

  render() {
    goalsView.render(this.layout.wrapper);
    todayMealsView.render(this.layout.wrapper);
    trainingsView.init(this.layout.wrapper);
  }
}

export default new DashboardView();
