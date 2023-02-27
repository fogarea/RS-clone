import { Routing } from "types/route.types";
import { getBtnLandingLang } from "lang/header/buttons.landing.lang";
import { state } from "../../../store/state";
import { Layout } from "types/layout.types";

class LoginButtonsView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.layout.sign = document.createElement("div");
    this.layout.sign.className = "sign";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "sign__wrapper";

    this.layout.iconWrapper = document.createElement("span");
    this.layout.iconWrapper.className = "sign__icon icon icon--button-round";

    this.layout.icon = document.createElement("span");
    this.layout.icon.className = "icon icon--reg";

    this.layout.iconWrapper.append(this.layout.icon);

    this.layout.signNav = document.createElement("ul");
    this.layout.signNav.className = "sign__list";

    this.layout.signNavBurgerMenu = document.createElement("ul");
    this.layout.signNavBurgerMenu.className = "sign__list--burger-menu";

    this.renderSignButtons(this.layout.signNav);
    this.renderSignButtons(this.layout.signNavBurgerMenu);

    this.layout.wrapper.replaceChildren(
      this.layout.iconWrapper,
      this.layout.signNav
    );

    this.layout.sign.append(this.layout.wrapper, this.layout.signNavBurgerMenu);

    root.replaceChildren(this.layout.sign);
  }

  renderSignButtons(root: HTMLElement) {
    const { btn } = getBtnLandingLang();

    if (btn) {
      const signItem1 = document.createElement("li");
      signItem1.className = "sign__item";

      const signInBtn = document.createElement("a");
      signInBtn.className = "nav__item--link";
      signInBtn.textContent = `${btn[0]}`;
      signInBtn.href = state.basePath + Routing.AUTHORIZATION;

      signItem1.append(signInBtn);

      const signItem2 = document.createElement("li");
      signItem2.className = "sign__item";

      const signUpBtn = document.createElement("a");
      signUpBtn.className = "nav__item--link";
      signUpBtn.textContent = `${btn[1]}`;
      signUpBtn.href = state.basePath + Routing.REGISTRATION;

      signItem2.append(signUpBtn);

      root.replaceChildren(signItem1, signItem2);
    }
  }
}

export default new LoginButtonsView();
