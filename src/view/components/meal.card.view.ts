import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import { Meal } from "types/meal.types";
import { getMealCardLang } from "lang/meals/meal.card.lang";
import { state } from "../../store/state";
import { MediaEndpoint } from "types/media.endpoint.types";

class MealCardView {
  layout = {} as Layout;

  render(root: HTMLElement, title: string, meal: Meal) {
    this.createLayout(root, meal);
    this.renderViewBtn(title, meal.id);
  }

  createLayout(root: HTMLElement, { title, media, time, nutrition }: Meal) {
    const { caloriesText, timeText } = getMealCardLang();

    this.layout.mealCard = document.createElement("div");
    this.layout.mealCard.className = "meal-card";

    this.layout.img = document.createElement("div");
    this.layout.img.className = "meal-card__img";
    this.layout.img.innerHTML = `<img src="${
      MediaEndpoint.MEAL + media
    }" alt="Meal Image">`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "meal-card__content";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "meal-card__title";
    this.layout.title.innerText = `${title}`;

    this.layout.info = document.createElement("div");
    this.layout.info.className = "meal-card__info tags";

    this.layout.time = document.createElement("span");
    this.layout.time.className = "meal-card__time tag tag--bordered";
    this.layout.time.innerText = `${time} ${timeText}`;

    this.layout.calories = document.createElement("span");
    this.layout.calories.className = "meal-card__calories tag tag--bordered";
    this.layout.calories.innerText = `${nutrition.calories} ${caloriesText}`;

    this.layout.info.append(this.layout.time, this.layout.calories);

    this.layout.button = document.createElement("span");
    this.layout.button.className = "meal-card__edit-link button button--link";

    this.layout.content.append(
      this.layout.title,
      this.layout.info,
      this.layout.button
    );

    this.layout.mealCard.append(this.layout.img, this.layout.content);

    root.append(this.layout.mealCard);
  }

  renderViewBtn(title: string, id: string) {
    const { btn } = getMealCardLang();

    const viewBtn = document.createElement("a");
    viewBtn.textContent = `${btn}`;
    viewBtn.href = state.basePath + Routing.MEALS + "/" + title + "/" + id;

    this.layout.button.append(viewBtn);
  }
}

export default new MealCardView();
