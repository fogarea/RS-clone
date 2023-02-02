import { Layout } from "types/layout.types";
import logoView from "../components/logo.view";
import navigationController from "../../controller/navigation.controller";

class FooterView {
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
    });
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper footer__wrapper";

    this.layout.logo = document.createElement("a");

    this.layout.wrapper.append(this.layout.logo);

    root.append(this.layout.wrapper);
  }

  render() {
    logoView.render(this.layout.logo as HTMLAnchorElement, "footer__logo logo");
  }
}

export default new FooterView();
