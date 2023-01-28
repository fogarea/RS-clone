import { state } from "store/state";

const logoSrc = require("./../../assets/favicon/favicon.svg") as string;

class LogoView {
  render(root: HTMLElement) {
    const logo = document.createElement("a");
    logo.classList.add("navigation__link");
    logo.href = state.basePath;

    const logoImg = document.createElement("img");

    logoImg.src = logoSrc;

    logo.append(logoImg);
    root.append(logo);
  }
}

export default new LogoView();
