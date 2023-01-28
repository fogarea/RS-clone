import navigationController from "controller/navigation.controller";
import { Layout } from "types/layout.types";
import authView from "./auth.view";
import logoView from "./logo.view";
import navigationView from "./navigation.view";

class HeaderView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandlers(root);
  }

  addHandlers(root: HTMLElement) {
    root.addEventListener("click", (event: MouseEvent) => {
      navigationController.route(event);
    });
  }

  createLayout(root: HTMLElement) {
    this.layout.logo = document.createElement("div");
    this.layout.navigation = document.createElement("div");
    this.layout.auth = document.createElement("div");

    root.append(this.layout.logo, this.layout.navigation, this.layout.auth);
  }

  render() {
    logoView.render(this.layout.logo);
    navigationView.render(this.layout.navigation);
    authView.render(this.layout.auth);
  }
}

export default new HeaderView();
