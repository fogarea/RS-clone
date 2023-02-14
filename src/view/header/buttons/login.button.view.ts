import { Routing } from "types/route.types";
import { getBtnLandingLang } from "lang/header/buttons.landing.lang";
import { state } from "../../../store/state";

class LoginButtonsView {
  render(root: HTMLElement) {
    const { btn } = getBtnLandingLang();

    if (btn) {
      const signInBtn = document.createElement("a");
      signInBtn.className = "button button--bordered";
      signInBtn.textContent = `${btn[0]}`;
      signInBtn.href = state.basePath + Routing.AUTHORIZATION;

      const signUpBtn = document.createElement("a");
      signUpBtn.className = "button button--colored";
      signUpBtn.textContent = `${btn[1]}`;
      signUpBtn.href = state.basePath + Routing.REGISTRATION;

      root.replaceChildren(signInBtn, signUpBtn);
    }
  }
}

export default new LoginButtonsView();
