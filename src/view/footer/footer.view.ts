import { Layout } from "types/layout.types";
import navigationController from "../../controller/navigation.controller";
import lang from "../../lang/lang";
import langSwitcherView from "./lang.switcher.view";
import programsController from "../../controller/programs.controller";
import authController from "../../controller/auth.controller";
import mealsController from "../../controller/meals.controller";
import loading from "utils/loading";

class FooterView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandlers();
  }

  addHandlers() {
    this.layout.select.addEventListener("change", async (e: Event) => {
      const select = e.target as HTMLSelectElement;

      lang.setLang(`${select.value}`);

      loading.globalOn(document.querySelector(".main"));

      await Promise.allSettled([
        programsController.getAll(),
        mealsController.getAll()
      ]);

      loading.globalOff();

      navigationController.reRenderRoute();
      authController.headerUpdate();
    });
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper footer__wrapper";

    this.layout.gh = document.createElement("div");
    this.layout.gh.className = "footer__gh gh";

    this.layout.gh.innerHTML = `<a class="gh__link" href="https://github.com/Elijah-I"><span class="icon icon--github"></span></a>
                    <a class="gh__link" href="https://github.com/fogarea"><span class="icon icon--github"></span></a>
                    <a class="gh__link" href="https://github.com/nataliyasamkevich"><span class="icon icon--github"></span></a>`;

    this.layout.rs = document.createElement("div");
    this.layout.rs.className = "footer__rss rss";
    this.layout.rs.innerHTML = `<a class="rss__link" href="https://rs.school/js/"><span class="icon icon--rss"></span></a>`;

    this.layout.select = document.createElement("div");
    this.layout.select.className = "footer__select select-lang";

    this.layout.wrapper.append(
      this.layout.gh,
      this.layout.select,
      this.layout.rs
    );

    root.replaceChildren(this.layout.wrapper);
  }

  render() {
    langSwitcherView.render(this.layout.select);
  }
}

export default new FooterView();
