import { Layout } from "types/layout.types";
import { getDashboardGoalsLang } from "lang/dashboard/goals.lang";
import button from "../components/button";
import { ModalWindow } from "../components/modal/modal.view";
import updateGoalsView from "./update.goals.view";
import { state } from "../../store/state";
import goalsModel from "../../model/goals.model";

class GoalsView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderEditBtn();
    this.renderCards();
    this.subscribe();
  }

  createLayout(root: HTMLElement) {
    const { title } = getDashboardGoalsLang();
    this.layout.target = document.createElement("section");
    this.layout.target.className = "target";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "target__wrapper cards__container";

    this.layout.top = document.createElement("div");
    this.layout.top.className = "target__top card__top";

    this.layout.edit = document.createElement("span");
    this.layout.edit.className = "target__edit-btn card__edit-btn";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "target__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.top.append(this.layout.title, this.layout.edit);

    this.layout.content = document.createElement("div");
    this.layout.content.className = "target__content";

    this.layout.modal = document.createElement("div");
    this.layout.modal.className = "modal__create";

    this.layout.wrapper.append(this.layout.top, this.layout.content);

    this.layout.target.append(this.layout.wrapper);

    root.append(this.layout.target);
  }

  renderEditBtn() {
    const { btn } = getDashboardGoalsLang();

    button.render(this.layout.edit, "button--edit-link", `${btn}`, () => {
      const modal = new ModalWindow();
      modal.buildModal(this.layout.modal);
      updateGoalsView.init(this.layout.modal, modal);
    });
  }

  renderCards() {
    const { water, steps } = getDashboardGoalsLang();
    this.layout.content.innerHTML = `<div class="target__card target-card card">
                                    <div class="icon-round">
                                        <span class="icon icon--water"></span>
                                    </div>
                                    <div class="target-card__content">
                                        <span class="target-card__data">${
                                          state.user.goals.water
                                        } ${water ? water[0] : ""}</span>
                                        <span class="target-card__text">${
                                          water ? water[1] : ""
                                        }</span>
                                    </div>
                                </div>

                                <div class="target__card target-card card">
                                    <div class="icon-round">
                                        <span class="icon icon--steps"></span>
                                    </div>
                                    <div class="target-card__content">
                                        <span class="target-card__data">${
                                          state.user.goals.steps
                                        }</span>
                                        <span class="target-card__text">${steps}</span>
                                    </div>
                                </div>`;
  }

  subscribe() {
    goalsModel.on("goals.update", () => this.renderCards());
  }
}

export default new GoalsView();
