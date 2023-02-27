import { Layout } from "types/layout.types";
import button from "view/components/button";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import meditationPopup from "./create.meditation.view";
import meditationModel from "model/meditation.model";
import { ModalWindow } from "../../components/modal/modal.view";
import meditationsListView from "./meditation.list.view";

class MeditationsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.renderButton();
    this.render();
    this.subscribe();
  }

  createLayout(root: HTMLElement) {
    const { title } = getMeditationsLang();

    this.layout.meditation = document.createElement("section");
    this.layout.meditation.className = "meditations wrapper";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "meditations__wrapper cards__container";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "meditations__content";

    this.layout.top = document.createElement("div");
    this.layout.top.className = "meditations__top card__top";

    this.layout.create = document.createElement("span");
    this.layout.create.className = "meditation-card__edit-btn card__edit-btn";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "meditations__title title top__title";
    this.layout.title.innerText = `${title}`;

    this.layout.top.append(this.layout.title, this.layout.create);

    this.layout.meditationCards = document.createElement("div");
    this.layout.meditationCards.className = "meditations__cards";

    this.layout.modal = document.createElement("div");
    this.layout.modal.className = "modal__create";

    this.layout.content.append(this.layout.top, this.layout.meditationCards);
    this.layout.wrapper.append(this.layout.content);
    this.layout.meditation.append(this.layout.wrapper);

    root.replaceChildren(this.layout.meditation);
  }

  render() {
    meditationsListView.init(this.layout.meditationCards);
  }

  renderButton() {
    button.render(
      this.layout.create,
      "button__icon icon icon--create",
      "",
      () => {
        const modal = new ModalWindow();
        modal.buildModal(this.layout.modal);

        meditationPopup.init(this.layout.modal, modal, {
          id: "",
          owner: "",
          title: "",
          description: "",
          media: "",
          tracks: []
        });
      }
    );
  }

  subscribe() {
    meditationModel.on("meditation.update.list", () => this.render());
  }
}

export default new MeditationsView();
