import { Routing } from "types/route.types";
import { getBtnLandingLang } from "lang/header/buttons.landing.lang";
import { state } from "../../../store/state";

class LoginButtonsView {
  render(root: HTMLElement) {
    const { btn } = getBtnLandingLang();

    if (btn) {
      const sign = document.createElement("div");
      sign.className = "sign";

      const wrapper = document.createElement("div");
      wrapper.className = "sign__wrapper";

      const iconWrapper = document.createElement("span");
      iconWrapper.className = "sign__icon icon icon--button-round";

      const icon = document.createElement("span");
      icon.className = "icon icon--reg";

      iconWrapper.append(icon);

      const signNav = document.createElement("ul");
      signNav.className = "sign__list";

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

      signNav.replaceChildren(signItem1, signUpBtn);

      wrapper.replaceChildren(iconWrapper, signNav);

      sign.append(wrapper);

      root.replaceChildren(sign);
    }
  }
}

export default new LoginButtonsView();
