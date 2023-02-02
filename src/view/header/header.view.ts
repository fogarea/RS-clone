import navigationController from "controller/navigation.controller";
import { Layout } from "types/layout.types";
import loginButtonsView from "./loginButtons.view";
import logoView from "../components/logo.view";
import navigationView from "./navigation.view";
import colorSchemeView from "./colorScheme.view";
import switchColorScheme from "../../utils/switchColorScheme";

class HeaderView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandlers(root);
  }

  addHandlers(root: HTMLElement) {
    root.addEventListener("click", (event: Event) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "A" || target.tagName === "IMG") {
        navigationController.route(event);
      }

      if (target.tagName === "INPUT") switchColorScheme.changeScheme(event);
    });
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper header__wrapper";

    this.layout.logo = document.createElement("a");

    this.layout.navigation = document.createElement("nav");
    this.layout.navigation.className = "header__nav nav";

    this.layout.colorScheme = document.createElement("label");
    this.layout.colorScheme.className = "header__scheme switch-scheme";

    this.layout.loginButtons = document.createElement("div");
    this.layout.loginButtons.className = "header__buttons";

    this.layout.wrapper.append(
      this.layout.logo,
      this.layout.navigation,
      this.layout.colorScheme,
      this.layout.loginButtons
    );

    root.append(this.layout.wrapper);
  }

  render() {
    logoView.render(this.layout.logo as HTMLAnchorElement, "header__logo logo");
    navigationView.render(this.layout.navigation);
    colorSchemeView.render(this.layout.colorScheme);
    loginButtonsView.render(this.layout.loginButtons);
  }
}

export default new HeaderView();
