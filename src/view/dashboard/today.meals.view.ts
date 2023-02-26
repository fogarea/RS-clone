import { Layout } from "types/layout.types";
import { getMealsLang } from "../../lang/dashboard/meals.lang";
import { state } from "../../store/state";
import { Routing } from "types/route.types";
import navigationController from "../../controller/navigation.controller";

class TodayMealsView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderCards();
    this.renderButton();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { title } = getMealsLang();
    this.layout.todayMeal = document.createElement("section");
    this.layout.todayMeal.className = "today-meals";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "today-meals__wrapper cards__container";

    this.layout.top = document.createElement("div");
    this.layout.top.className = "today-meals__top card__top";

    this.layout.view = document.createElement("span");
    this.layout.view.className = "aside__edit-link card__edit-btn";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "today-meals__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.top.append(this.layout.title, this.layout.view);

    this.layout.content = document.createElement("div");
    this.layout.content.className = "today-meals__content";

    this.layout.wrapper.append(this.layout.top, this.layout.content);

    this.layout.todayMeal.append(this.layout.wrapper);

    root.append(this.layout.todayMeal);
  }

  renderCards() {
    const { breakfastTitle, lunchTitle, dinnerTitle, foods } = getMealsLang();

    this.layout.content.innerHTML = `<div class="today-meals__card meal-card card">
                                    <div class="meal-card__icon">
                                        <span class="icon icon--breakfast"></span>
                                    </div>
                                    <div class="meal-card__content">
                                        <div class="meal-card__info">
                                            <span class="meal-card__text">${breakfastTitle}</span>
                                            <span class="meal-card__data">${state.meals.breakfast.length}+ ${foods}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="today-meals__card meal-card card">
                                    <div class="meal-card__icon">
                                        <span class="icon icon--lunch"></span>
                                    </div>
                                    <div class="meal-card__content">
                                        <div class="meal-card__info">
                                            <span class="meal-card__text">${lunchTitle}</span>
                                            <span class="meal-card__data">${state.meals.lunch.length}+ ${foods}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="today-meals__card meal-card card">
                                    <div class="meal-card__icon">
                                        <span class="icon icon--dinner"></span>
                                    </div>
                                    <div class="meal-card__content">
                                        <div class="meal-card__info">
                                            <span class="meal-card__text">${dinnerTitle}</span>
                                            <span class="meal-card__data">${state.meals.dinner.length}+ ${foods}</span>
                                        </div>
                                    </div>
                                </div>`;
  }

  renderButton() {
    const { btn } = getMealsLang();

    const editLink = document.createElement("a");
    editLink.textContent = `${btn}`;
    editLink.href = state.basePath + Routing.MEALS;

    this.layout.view.append(editLink);
  }

  addHandler() {
    this.layout.wrapper.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "A" || target.tagName === "SPAN") {
        navigationController.route(event);
      }
    });
  }
}

export default new TodayMealsView();
