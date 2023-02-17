import { Layout } from "types/layout.types";
import logoView from "../components/logo.view";
import navigationController from "../../controller/navigation.controller";
import lang from "../../lang/lang";
import langSwitcherView from "./lang.switcher.view";
import programsController from "../../controller/programs.controller";
import authController from "../../controller/auth.controller";
import mealsController from "../../controller/meals.controller";

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

      if (target.tagName === "A" || target.tagName === "SPAN") {
        navigationController.route(event);
      }
    });

    this.layout.select.addEventListener("change", async (e: Event) => {
      const select = e.target as HTMLSelectElement;

      lang.setLang(`${select.value}`);

      await programsController.getAll();
      await mealsController.getAll();
      navigationController.reRenderRoute();
      authController.headerUpdate();
    });
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper footer__wrapper";

    this.layout.logo = document.createElement("a");

    this.layout.select = document.createElement("div");
    this.layout.select.className = "footer__select";

    this.layout.wrapper.append(this.layout.logo, this.layout.select);

    root.replaceChildren(this.layout.wrapper);
  }

  render() {
    logoView.render(this.layout.logo as HTMLAnchorElement, "footer__logo logo");
    langSwitcherView.render(this.layout.select);
  }
}

export default new FooterView();
