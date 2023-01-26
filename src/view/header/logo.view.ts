const logoSrc = require("./../../assets/favicon/favicon.svg") as string;

class LogoView {
  render(root: HTMLElement) {
    const logo = document.createElement("img");
    logo.src = logoSrc;

    root.append(logo);
  }
}

export default new LogoView();
