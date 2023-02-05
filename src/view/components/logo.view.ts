import { state } from "store/state";

class LogoView {
  render(root: HTMLAnchorElement, classes: string) {
    root.className = classes;
    root.href = state.basePath;

    const logo = document.createElement("span");
    logo.className = "icon icon--logo";

    root.append(logo);
  }
}

export default new LogoView();
