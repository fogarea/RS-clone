import { ModalWindow } from "./modal.view";
import { getExitLang } from "lang/profile/exit.lang";
import loading from "../../../utils/loading";

class ModalDialogWindow extends ModalWindow {
  dialog: HTMLElement;

  text: HTMLElement;

  buttons: HTMLElement;

  noBtn: HTMLButtonElement;

  yesBtn: HTMLButtonElement;

  constructor() {
    super();

    this.dialog = this.createDomNode("div", "modal__dialog");
    this.text = this.createDomNode("span", "dialog__text");
    this.buttons = this.createDomNode("div", "dialog__buttons");

    this.noBtn = this.createDomNode(
      "span",
      "dialog__button",
      "button",
      "button--link",
      "close-modal-dialog-btn"
    );

    this.yesBtn = this.createDomNode(
      "span",
      "dialog__button",
      "button",
      "button--link"
    );
  }

  buildModalDialog(text: string, confirmCb: (event: Event) => void) {
    const { noBtn, yesBtn } = getExitLang();

    loading.off(this.buttons);

    this.noBtn.innerHTML = `<span>${noBtn}</span>`;
    this.yesBtn.innerHTML = `<span>${yesBtn}</span>`;

    this.buttons.replaceChildren(this.noBtn, this.yesBtn);

    this.dialog.replaceChildren(this.text, this.buttons);

    this.text.innerText = text;

    this.buildModal(this.dialog);
    this.bindCloseModalDialogEvents(confirmCb);
  }

  bindCloseModalDialogEvents(confirmCb: (event: Event) => void) {
    this.noBtn.addEventListener("click", () => this.removeModal());
    this.yesBtn.addEventListener("click", (e: Event) => {
      loading.on(this.buttons);
      confirmCb(e);
    });
  }
}

export default new ModalDialogWindow();
