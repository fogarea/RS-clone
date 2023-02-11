import { state } from "../../../store/state";
import ageUtils from "../../../utils/age.utils";
import { getProfilePhysiqueLang } from "../../../lang/profile/physique.profile.lang";
import { Layout } from "types/layout.types";
import { getProfileLang } from "../../../lang/profile/profile.lang";
import navigationController from "../../../controller/navigation.controller";
import { Routing } from "types/route.types";
import button from "../../components/button";

class PhysiqueView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderCards();
    this.renderButton();
  }

  createLayout(root: HTMLElement) {
    const { title } = getProfilePhysiqueLang();

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "physique__wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "physique__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "physique__content";

    this.layout.button = document.createElement("div");
    this.layout.button.className = "physique__edit-btn";

    this.layout.wrapper.append(
      this.layout.title,
      this.layout.content,
      this.layout.button
    );

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

  renderButton() {
    const { btn } = getProfileLang();
    const onEdit = () => navigationController.createRoute(Routing.EDIT_DETAILS);

    button.render(this.layout.button, "button--rounded", `${btn}`, onEdit);
  }
}

export default new PhysiqueView();
