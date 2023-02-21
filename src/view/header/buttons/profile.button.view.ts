import { Routing } from "types/route.types";
import { state } from "../../../store/state";
import { Layout } from "types/layout.types";

class ProfileButtonsView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    const iconWrapper = document.createElement("a");
    iconWrapper.className = "sign__icon icon icon--button-round";
    iconWrapper.href = state.basePath + Routing.PROFILE;

    const icon = document.createElement("span");
    icon.className = "icon icon--auth";

    iconWrapper.append(icon);

    root.replaceChildren(iconWrapper);
  }
}

export default new ProfileButtonsView();
