import { state } from "store/state";

const logoSrc = require("../../assets/svg/logo/logo.svg") as string;

class LogoView {
  render(root: HTMLAnchorElement, classes: string) {
    root.className = classes;
    root.href = state.basePath;

    const logoImg = document.createElement("img");
    logoImg.alt = "Fitness Logo";
    logoImg.src = logoSrc;

    root.append(logoImg);
  }
}

export default new LogoView();
