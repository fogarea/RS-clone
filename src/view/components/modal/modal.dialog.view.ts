import { ModalWindow } from "./modal.view";

class ModalDialogWindow extends ModalWindow {
  dialog: HTMLElement;

  text: HTMLElement;

  buttons: HTMLElement;

  NoBtn: HTMLButtonElement;

  YesBtn: HTMLButtonElement;

  constructor() {
    super();
    this.dialog = this.createDomNode("div", "modal__dialog");
    this.text = this.createDomNode("span", "dialog__text");
    this.buttons = this.createDomNode("div", "dialog__buttons");

    this.NoBtn = this.createDomNode(
      "button",
      "button",
      "button--rounded",
      "close-modal-dialog-btn"
    );
    this.NoBtn.innerText = "No";

    this.YesBtn = this.createDomNode("button", "button", "button--rounded");
    this.YesBtn.innerText = "Yes";

    this.buttons.append(this.NoBtn, this.YesBtn);

    this.dialog.append(this.text, this.buttons);
  }

  buildModalDialog(text: string, confirmCb: (event: Event) => void) {
    this.text.innerText = text;

    this.buildModal(this.dialog);
    this.bindCloseModalDialogEvents(confirmCb);
  }

  bindCloseModalDialogEvents(confirmCb: (event: Event) => void) {
    this.NoBtn.addEventListener("click", () => this.removeModal());
    this.YesBtn.addEventListener("click", (e: Event) => {
      this.removeModal();
      confirmCb(e);
    });
  }
}

export default new ModalDialogWindow();
