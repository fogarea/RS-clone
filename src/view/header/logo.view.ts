<<<<<<< HEAD
=======
import { state } from "store/state";

>>>>>>> c6b7121 (feat: implement base routing)
const logoSrc = require("./../../assets/favicon/favicon.svg") as string;

class LogoView {
  render(root: HTMLElement) {
<<<<<<< HEAD
    const logo = document.createElement("img");
    logo.src = logoSrc;

=======
    const logo = document.createElement("a");
    logo.classList.add("navigation__link");
    logo.href = state.basePath;

    const logoImg = document.createElement("img");

    logoImg.src = logoSrc;

    logo.append(logoImg);
>>>>>>> c6b7121 (feat: implement base routing)
    root.append(logo);
  }
}

export default new LogoView();
