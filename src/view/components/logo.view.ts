import { state } from "store/state";
import { Routing } from "types/route.types";

class LogoView {
  render(root: HTMLAnchorElement, classes: string) {
    root.className = classes;
    root.href = state.basePath + Routing.MAIN;

    const logo = document.createElement("span");
    logo.className = "icon icon--logo";

    root.append(logo);
  }
}

export default new LogoView();
