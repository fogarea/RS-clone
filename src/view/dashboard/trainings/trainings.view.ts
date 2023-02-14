import { Layout } from "types/layout.types";
import dashboardTrainingsView from "./trainings.list.view";
import { state } from "../../../store/state";

class TrainingsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "trainings-wrapper";

    this.layout.activeTrainings = document.createElement("section");
    this.layout.activeTrainings.className = "active-trainings";

    this.layout.completedTrainings = document.createElement("section");
    this.layout.completedTrainings.className = "completed-trainings";

    this.layout.wrapper.append(
      this.layout.activeTrainings,
      this.layout.completedTrainings
    );

    root.append(this.layout.wrapper);
  }

  render() {
    dashboardTrainingsView.init(this.layout.activeTrainings);

    if (state.user.progress.finished.length)
      dashboardTrainingsView.init(this.layout.completedTrainings, "completed");
  }
}

export default new TrainingsView();
