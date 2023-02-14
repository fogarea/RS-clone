import { Layout } from "types/layout.types";
import { getMealsLang } from "../../lang/dashboard/meals.lang";

class TodayMealsView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderCards();
  }

  createLayout(root: HTMLElement) {
    const { title } = getMealsLang();
    this.layout.todayMeal = document.createElement("section");
    this.layout.todayMeal.className = "today-meals";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "today-meals__wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "today-meals__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "today-meals__content";

    this.layout.wrapper.append(this.layout.title, this.layout.content);

    this.layout.todayMeal.append(this.layout.wrapper);

    root.append(this.layout.todayMeal);
  }

  renderCards() {
    const { breakfastTitle, lunchTitle, dinnerTitle, foods, btn } =
      getMealsLang();

    this.layout.content.innerHTML = `<div class="today-meals__card meal-card">
                                    <div class="meal-card__icon">
                                        <span class="icon icon--breakfast"></span>
                                    </div>
                                    <div class="meal-card__content">
                                        <div class="meal-card__info">
                                            <span class="meal-card__text">${breakfastTitle}</span>
                                            <span class="meal-card__data">120+ ${foods}</span>
                                        </div>
                                        <span class="meal-card__edit-link button button--link">
                                            <a href="#">${btn}</a>
                                        </span>
                                    </div>
                                </div>

                                <div class="today-meals__card meal-card">
                                    <div class="meal-card__icon">
                                        <span class="icon icon--lunch"></span>
                                    </div>
                                    <div class="meal-card__content">
                                        <div class="meal-card__info">
                                            <span class="meal-card__text">${lunchTitle}</span>
                                            <span class="meal-card__data">120+ ${foods}</span>
                                        </div>
                                         <span class="meal-card__edit-link button button--link">
                                            <a href="#">${btn}</a>
                                        </span>
                                    </div>
                                </div>
                                
                                <div class="today-meals__card meal-card">
                                    <div class="meal-card__icon">
                                        <span class="icon icon--dinner"></span>
                                    </div>
                                    <div class="meal-card__content">
                                        <div class="meal-card__info">
                                            <span class="meal-card__text">${dinnerTitle}</span>
                                            <span class="meal-card__data">120+ ${foods}</span>
                                        </div>
                                        <span class="meal-card__edit-link button button--link">
                                            <a href="#">${btn}</a>
                                        </span>
                                    </div>
                                </div>`;
  }
}

export default new TodayMealsView();
