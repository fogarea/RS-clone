import { Layout } from "types/layout.types";
import button from "./button";
import { ButtonProps } from "./program.cart.view";
import { Meditation } from "types/meditation.types";
import meditationPopup from "../meditations/main/create.meditation.view";
import { ModalWindow } from "./modal/modal.view";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import { MediaEndpoint } from "types/media.endpoint.types";

class MeditationCardView {
  layout = {} as Layout;

  render(root: HTMLElement, meditation: Meditation, btnProps?: ButtonProps[]) {
    this.createLayout(root, meditation);
    this.renderEditBtn(meditation);
    if (btnProps) this.renderButtons(meditation.id, btnProps);
  }

  createLayout(root: HTMLElement, { title, media, description }: Meditation) {
    this.layout.meditationCard = document.createElement("div");
    this.layout.meditationCard.className = "meditation-card card";

    this.layout.img = document.createElement("div");
    this.layout.img.className = "meditation-card__img";
    this.layout.img.innerHTML = `<img src="${MediaEndpoint.MEDITATION}/${media}.jpg" alt="Meditation Picture">`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "meditation-card__content";

    this.layout.top = document.createElement("div");
    this.layout.top.className = "meditation-card__top card__top";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "meditation-card__title";
    this.layout.title.innerText = `${title}`;

    this.layout.edit = document.createElement("span");
    this.layout.edit.className = "meditation-card__edit-btn card__edit-btn";

    this.layout.top.append(this.layout.title, this.layout.edit);

    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "meditation-card__desc";
    this.layout.desc.innerHTML = `<p class="meditation-card__text">${description}</p>`;

    this.layout.buttons = document.createElement("div");
    this.layout.buttons.className = "meditation-card__buttons";

    this.layout.modal = document.createElement("div");
    this.layout.modal.className = "modal__create";

    this.layout.content.append(
      this.layout.top,
      this.layout.desc,
      this.layout.buttons
    );

    this.layout.meditationCard.append(this.layout.img, this.layout.content);

    root.append(this.layout.meditationCard);
  }

  renderEditBtn(meditation: Meditation) {
    const { edit } = getMeditationsLang();

    button.render(this.layout.edit, "button--edit-link", `${edit}`, () => {
      const modal = new ModalWindow();
      modal.buildModal(this.layout.modal);
      meditationPopup.init(this.layout.modal, modal, meditation);
    });
  }

  renderButtons(id: string, btnProps: ButtonProps[]) {
    btnProps.forEach(({ text, classes, callback }) => {
      button.render(this.layout.buttons, classes, text, callback);
    });
  }
}

export default new MeditationCardView();
