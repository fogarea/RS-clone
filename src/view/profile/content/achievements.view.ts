import { Layout } from "types/layout.types";
import { state } from "../../../store/state";
import { getProfileAchievementsLang } from "lang/profile/achievements.profile.lang";

class AchievementsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.renderItems();
  }

  createLayout(root: HTMLElement) {
    const { title } = getProfileAchievementsLang();

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "achievements__wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "achievements__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.list = document.createElement("ul");
    this.layout.list.className = "achievements__list";

    this.layout.wrapper.append(this.layout.title, this.layout.list);

    root.replaceChildren(this.layout.wrapper);
  }

  renderItems() {
    const { ...achievements } = getProfileAchievementsLang();

    for (const [key, value] of Object.entries(state.user.achievements)) {
      this.layout.list.innerHTML += `<li class="achievements__item">
                                        <div class="icon-round icon-round--shadow">
                                            <span class="icon icon--${key} ${
        value ? "" : "icon--blur"
      }"></span>
                                        </div>
                                        <span class="achievements__desc">${
                                          achievements[key]
                                        }</span>
                                     </li>`;
    }
  }
}

export default new AchievementsView();
