class PopupWindow {
  popup: HTMLElement;

  popupContent: HTMLElement;

  constructor() {
    this.popup = this.createDomNode("div", "popup");
    this.popupContent = this.createDomNode("div", "popup__content");
  }

  buildPopup(text: string) {
    this.setContent(text);
    this.appendPopupElements();
    this.showPopup();
  }

  createDomNode<T extends HTMLElement>(
    element: string,
    ...classes: string[]
  ): T {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node as T;
  }

  setContent(content: string) {
    this.popupContent.textContent = content;
  }

  appendPopupElements() {
    this.popup.append(this.popupContent);
  }

  showPopup() {
    document.body.append(this.popup);

    setTimeout(() => {
      this.popup.classList.add("popup--show");
    }, 1000);

    setTimeout(this.closePopup, 5000);
  }

  closePopup() {
    const popup = document.querySelector(".popup");

    popup?.classList.remove("popup--show");

    popup?.addEventListener("transitionend", () => {
      document.querySelector(".popup")?.remove();
    });
  }
}

export default new PopupWindow();
