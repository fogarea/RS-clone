import player from "utils/player.utils";
import { Layout } from "types/layout.types";
import progressController from "controller/progress.controller";

class CoverView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandlers();
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper footer__wrapper";

    root.replaceChildren(this.layout.wrapper);
  }

  render() {
    // tmp: object must be replaced with state.user.program[training-id]
    player.create(this.layout.wrapper, {
      id: "63e0e37a979600ef61a1443c",
      title: "workout",
      description: "8 min abs",
      tag: ["abs"],
      media: "nV80y796Gwk",
      calories: 50000
    });
  }

  addHandlers() {
    this.watchProgress();
  }

  watchProgress() {
    setTimeout(() => {
      progressController.watchProgress();
      this.watchProgress();
    }, 60000);
  }
}

export default new CoverView();
