import { Routing } from "types/route.types";
import { getBtnAppLang } from "lang/header/button.app.lang";
import { state } from "../../../store/state";

class ProfileButtonsView {
  render(root: HTMLElement) {
    const { btn } = getBtnAppLang();

    const profileBtn = document.createElement("a");
    profileBtn.className = "button button--colored";
    profileBtn.textContent = `${btn}`;
    profileBtn.href = state.basePath + Routing.PROFILE;

    root.replaceChildren(profileBtn);
  }
}

export default new ProfileButtonsView();
