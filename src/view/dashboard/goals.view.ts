import { Layout } from "types/layout.types";
import { getDashboardGoalsLang } from "../../lang/dashboard/goals.lang";
import { state } from "../../store/state";
import { Routing } from "types/route.types";
import navigationController from "../../controller/navigation.controller";

class GoalsView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderEditLink();
    this.renderCards();
    this.addHandler();
  }

  addHandler() {
    this.layout.wrapper.addEventListener("click", (event: Event) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "A" || target.tagName === "SPAN") {
        navigationController.route(event);
      }
    });
  }

  createLayout(root: HTMLElement) {
    const { title } = getDashboardGoalsLang();
    this.layout.target = document.createElement("section");
    this.layout.target.className = "target";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "target__wrapper cards__container";

    this.layout.top = document.createElement("div");
    this.layout.top.className = "target__top";

    this.layout.edit = document.createElement("span");
    this.layout.edit.className = "aside__edit-link";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "target__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.top.append(this.layout.title, this.layout.edit);

    this.layout.content = document.createElement("div");
    this.layout.content.className = "target__content";

    this.layout.wrapper.append(this.layout.top, this.layout.content);

    this.layout.target.append(this.layout.wrapper);

    root.append(this.layout.target);
  }

  renderEditLink() {
    const { btn } = getDashboardGoalsLang();

    const editLink = document.createElement("a");
    editLink.textContent = `${btn}`;
    editLink.href = state.basePath + Routing.GOALS;

    this.layout.edit.append(editLink);
  }

  renderCards() {
    const { water, steps } = getDashboardGoalsLang();
    this.layout.content.innerHTML = `<div class="target__card target-card">
                                    <div class="icon-round">
                                        <span class="icon icon--water"></span>
                                    </div>
                                    <div class="target-card__content">
                                        <span class="target-card__data">2${
                                          water ? water[0] : ""
                                        }</span>
                                        <span class="target-card__text">${
                                          water ? water[1] : ""
                                        }</span>
                                    </div>
                                </div>

                                <div class="target__card target-card">
                                    <div class="icon-round">
                                        <span class="icon icon--steps"></span>
                                    </div>
                                    <div class="target-card__content">
                                        <span class="target-card__data">2000</span>
                                        <span class="target-card__text">${steps}</span>
                                    </div>
                                </div>`;
  }
}

export default new GoalsView();
