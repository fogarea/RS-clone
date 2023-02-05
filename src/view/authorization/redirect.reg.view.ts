import { Layout } from "types/layout.types";
import { state } from "../../store/state";
import { Routing } from "types/route.types";
import navigationController from "../../controller/navigation.controller";

class RedirectRegView {
  layout = {} as Layout;

  link?: HTMLAnchorElement;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    this.layout.content = document.createElement("p");
    this.layout.content.className = "authorization__redirect";
    this.layout.content.innerText = "Don’t have an account yet? ";

    this.link = document.createElement("a");
    this.link.href = state.basePath + Routing.REGISTRATION;
    this.link.className = "authorization__link";
    this.link.innerText = "Register";

    this.layout.content.append(this.link);

    root.append(this.layout.content);
  }

  addHandler() {
    this.link?.addEventListener("click", (e: Event) => {
      navigationController.route(e);
    });
  }
}

export default new RedirectRegView();
