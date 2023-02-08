import navigationController from "controller/navigation.controller";
import { Layout } from "types/layout.types";
import loginButtonsView from "./buttons/login.button.view";
import logoView from "../components/logo.view";
import colorSchemeView from "./color.scheme.view";
import switchColorScheme from "../../utils/switchColorScheme";
import { state } from "store/state";
import profileButtonView from "./buttons/profile.button.view";
import navigationAppView from "./navigation/navigation.app.view";
import navigationLandingView from "./navigation/navigation.landing.view";

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

      if (target.tagName === "A" || target.tagName === "SPAN") {
        navigationController.route(event);
      }

      if (target.id === "switch-scheme") switchColorScheme.changeScheme(target);
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

    this.layout.buttons = document.createElement("div");
    this.layout.buttons.className = "header__buttons";

    this.layout.wrapper.append(
      this.layout.logo,
      this.layout.navigation,
      this.layout.colorScheme,
      this.layout.buttons
    );

    root.replaceChildren(this.layout.wrapper);
  }

  render() {
    logoView.render(this.layout.logo as HTMLAnchorElement, "header__logo logo");
    colorSchemeView.render(this.layout.colorScheme);

    if (state.user.authorized) {
      navigationAppView.render(this.layout.navigation);
      profileButtonView.render(this.layout.buttons);
    } else {
      navigationLandingView.render(this.layout.navigation);
      loginButtonsView.render(this.layout.buttons);
    }
  }
}

export default new HeaderView();
