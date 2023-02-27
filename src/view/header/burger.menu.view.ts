import { Layout } from "types/layout.types";

class BurgerMenuView {
  layout = {} as Layout;

  init(header: HTMLElement, wrapper: HTMLElement) {
    this.createLayout(header, wrapper);
    this.addHandlers(wrapper);
  }

  createLayout(header: HTMLElement, nav: HTMLElement) {
    this.layout.openBtn = document.createElement("div");
    this.layout.openBtn.className = "header__button burger-button";
    this.layout.openBtn.innerHTML = `<span class="icon icon--burger"></span>`;

    header.append(this.layout.openBtn);

    this.layout.closeBtn = document.createElement("div");
    this.layout.closeBtn.className = "header__close-button close-button";
    this.layout.closeBtn.innerHTML = `<span class="icon icon--close"></span>`;

    nav.append(this.layout.closeBtn);
  }

  addHandlers(wrapper: HTMLElement) {
    const navigation = document.querySelector(".header__content");

    const handleNavButtonClick = () => {
      navigation?.classList.remove("nav--show");
      document.body.classList.remove("body--scroll__disable");
    };

    this.layout.openBtn.addEventListener("click", () => {
      navigation?.classList.add("nav--show");
      document.body.classList.add("body--scroll__disable");
    });

    this.layout.closeBtn.addEventListener("click", (e: Event) => {
      if (
        e.target instanceof HTMLElement &&
        e.target.classList.contains("icon--close")
      ) {
        handleNavButtonClick();
      }
    });

    wrapper.addEventListener("click", (e: Event) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === "A" || e.target.closest(".sign__icon"))
      ) {
        handleNavButtonClick();
      }
    });
  }
}

export default new BurgerMenuView();
