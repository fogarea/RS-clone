import { state } from "store/state";
import { Routing } from "types/route.types";

class LogoView {
  render(root: HTMLAnchorElement, classes: string) {
    root.className = classes;
    root.href = state.user.authorized
      ? state.basePath + Routing.DASHBOARD
      : state.basePath;

    const logo = document.createElement("span");
    logo.className = "icon icon--logo";

    root.append(logo);
  }
}

export default new LogoView();
