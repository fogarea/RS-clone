import { ModalWindow } from "./modal.view";
import { getExitLang } from "lang/profile/exit.lang";
import loading from "../../../utils/loading";
import { Layout } from "types/layout.types";

class ModalDialogWindow extends ModalWindow {
  layout = {} as Layout;

  buildModalDialog(text: string, confirmCb: (event: Event) => void) {
    const { noBtn, yesBtn } = getExitLang();

    this.layout.dialog = this.createDomNode("div", "modal__dialog");
    this.layout.text = this.createDomNode("span", "dialog__text");
    this.layout.buttons = this.createDomNode("div", "dialog__buttons");

    this.layout.noBtn = this.createDomNode(
      "span",
      "dialog__button",
      "button",
      "button--link",
      "close-modal-dialog-btn"
    );

    this.layout.yesBtn = this.createDomNode(
      "span",
      "dialog__button",
      "button",
      "button--link"
    );

    loading.off(this.layout.buttons);

    this.layout.noBtn.innerHTML = `<span>${noBtn}</span>`;
    this.layout.yesBtn.innerHTML = `<span>${yesBtn}</span>`;

    this.layout.buttons.append(this.layout.noBtn, this.layout.yesBtn);

    this.layout.dialog.append(this.layout.text, this.layout.buttons);

    this.layout.text.innerText = text;

    this.buildModal(this.layout.dialog);
    this.bindCloseModalDialogEvents(confirmCb);
  }

  bindCloseModalDialogEvents(confirmCb: (event: Event) => void) {
    this.layout.noBtn.addEventListener("click", () => this.removeModal());
    this.layout.yesBtn.addEventListener("click", (e: Event) => {
      loading.on(this.layout.buttons);
      confirmCb(e);
    });
  }
}

export default new ModalDialogWindow();
