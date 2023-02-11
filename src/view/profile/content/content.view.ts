import { Layout } from "types/layout.types";
import progressView from "./progress.view";
import achievementsView from "./achievements.view";
import todayView from "./today.view";

class ContentView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
  }

  createLayout(root: HTMLElement) {
    this.layout.progress = document.createElement("section");
    this.layout.progress.className = "progress";

    this.layout.achievements = document.createElement("section");
    this.layout.achievements.className = "achievements";

    this.layout.today = document.createElement("section");
    this.layout.today.className = "today";

    root.replaceChildren(
      this.layout.progress,
      this.layout.achievements,
      this.layout.today
    );
  }

  render() {
    progressView.render(this.layout.progress);
    achievementsView.init(this.layout.achievements);
    todayView.init(this.layout.today);
  }
}

export default new ContentView();
