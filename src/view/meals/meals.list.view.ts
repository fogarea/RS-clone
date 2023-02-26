import { Layout } from "types/layout.types";
import { Meal } from "types/meal.types";
import mealCardView from "../components/meal.card.view";
import { getMealsLang } from "lang/meals/meals.lang";
import navigationController from "../../controller/navigation.controller";

class MealsListView {
  layout = {} as Layout;

  init(root: HTMLElement, title: string, meals: Meal[]) {
    this.createLayout(root, title);
    this.render(meals, title);
    this.addHandler();
  }

  createLayout(root: HTMLElement, title: string) {
    const mealsLang = getMealsLang();

    this.layout.meals = document.createElement("section");
    this.layout.meals.className = "meals";
    this.layout.meals.id = title;

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "meals__wrapper wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "meals__title title";
    this.layout.title.innerText = `${mealsLang[title]}`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "meals__content";

    this.layout.wrapper.append(this.layout.title, this.layout.content);

    this.layout.meals.append(this.layout.wrapper);

    root.append(this.layout.meals);
  }

  render(meals: Meal[], title: string) {
    meals.forEach((meal) =>
      mealCardView.render(this.layout.content, title, meal)
    );
  }

  addHandler() {
    this.layout.wrapper.addEventListener("click", (e: MouseEvent) => {
      if (e.target instanceof HTMLSpanElement) {
        const route = (e.target.firstChild as HTMLAnchorElement).href;
        navigationController.applyRoute(route);
      }
      if (e.target instanceof HTMLAnchorElement) {
        navigationController.route(e);
      }
    });
  }
}

export default new MealsListView();
