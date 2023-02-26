import { state } from "../../../store/state";
import ageUtils from "../../../utils/age.utils";
import { getProfilePhysiqueLang } from "../../../lang/profile/physique.profile.lang";
import { Layout } from "types/layout.types";
import { getProfileLang } from "../../../lang/profile/profile.lang";
import navigationController from "../../../controller/navigation.controller";
import { Routing } from "types/route.types";

class PhysiqueView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderCards();
    this.renderEditLink();
    this.addHandler();
  }

  addHandler() {
    this.layout.wrapper.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "A" || target.tagName === "SPAN") {
        navigationController.route(event);
      }
    });
  }

  createLayout(root: HTMLElement) {
    const { title } = getProfilePhysiqueLang();

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "physique__wrapper cards__container";

    this.layout.top = document.createElement("div");
    this.layout.top.className = "physique__top card__top";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "physique__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.edit = document.createElement("span");
    this.layout.edit.className = "aside__edit-link card__edit-btn";

    this.layout.top.append(this.layout.title, this.layout.edit);

    this.layout.content = document.createElement("div");
    this.layout.content.className = "physique__content";

    this.layout.wrapper.append(this.layout.top, this.layout.content);

    root.replaceChildren(this.layout.wrapper);
  }

  renderCards() {
    const { heightText, weightText, ageText } = getProfilePhysiqueLang();
    const { height, weight, birthday } = state.user.profile;

    this.layout.content.innerHTML = `<div class="physique__card">
                                    <span class="physique__data">${height}</span>
                                    <span class="physique__text">${heightText}</span>
                                </div>
                                <div class="physique__card">
                                    <span class="physique__data">${weight}</span>
                                    <span class="physique__text">${weightText}</span>
                                </div>
                                <div class="physique__card">
                                    <span class="physique__data">${ageUtils.getAge(
                                      birthday
                                    )}</span>
                                    <span class="physique__text">${ageText}</span>
                                </div>`;
  }

  renderEditLink() {
    const { btn } = getProfileLang();

    const editLink = document.createElement("a");
    editLink.textContent = `${btn}`;
    editLink.href = state.basePath + Routing.EDIT_DETAILS;

    this.layout.edit.append(editLink);
  }
}

export default new PhysiqueView();
