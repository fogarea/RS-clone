import { Layout } from "types/layout.types";
import button from "view/components/button";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import meditationList from "./meditation.list.view";
import meditationPopup from "./meditation.popup.view";
import meditationModel from "model/meditation.model";

class MeditationsView {
  layout = {} as Layout;

  async init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.subscribe();
  }

  createLayout(root: HTMLElement) {
    const { title, add } = getMeditationsLang();

    const container = document.createElement("section");
    container.classList.add("meditations", "wrapper");

    this.layout.meditations = document.createElement("div");
    this.layout.meditations.classList.add("meditations__content");

    const titleContainer = document.createElement("h2");
    titleContainer.textContent = `${title}`;

    this.layout.popup = document.createElement("div");

    button.render(titleContainer, "button--bordered", `${add}`, () => {
      meditationPopup.init(this.layout.popup, {
        id: "",
        owner: "",
        title: "",
        description: "",
        media: "",
        tracks: []
      });
    });

    container.append(
      titleContainer,
      this.layout.popup,
      this.layout.meditations
    );

    root.replaceChildren(container);
  }

  render() {
    meditationList.render(this.layout.meditations, this.layout.popup);
  }

  subscribe() {
    meditationModel.on("meditation.update.list", () => this.render());
  }
}

export default new MeditationsView();
