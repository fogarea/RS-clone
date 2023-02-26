import { Layout } from "types/layout.types";
import { state } from "../../store/state";
import { Routing } from "types/route.types";
import navigationController from "../../controller/navigation.controller";
import { getAuthLang } from "../../lang/auth.lang";

class RedirectRegView {
  layout = {} as Layout;

  link?: HTMLAnchorElement;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { redirect, link } = getAuthLang();

    this.layout.content = document.createElement("p");
    this.layout.content.className = "form__redirect";
    this.layout.content.innerText = `${redirect}`;

    this.link = document.createElement("a");
    this.link.href = state.basePath + Routing.REGISTRATION;
    this.link.className = "form__link";
    this.link.innerText = `${link}`;

    this.layout.content.append(this.link);

    root.append(this.layout.content);
  }

  addHandler() {
    this.link?.addEventListener("click", (e: MouseEvent) => {
      navigationController.route(e);
    });
  }
}

export default new RedirectRegView();
