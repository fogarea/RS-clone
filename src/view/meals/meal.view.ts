import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import mealsController from "../../controller/meals.controller";
import { Ingredients, Meals, Nutrition } from "types/meal.types";
import { getMealLang } from "lang/meals/meal.lang";
import backButton from "../components/back.button";
import { MediaEndpoint } from "types/media.endpoint.types";

class MealView {
  mealId = "";

  layout = {} as Layout;

  init(root: HTMLElement, category: keyof Meals, mealId: string) {
    this.mealId = mealId;

    const mealData = mealsController.getMeal(this.mealId, category);

    if (!mealData) return;

    const { desc, steps, step, ingredients, back } = getMealLang();

    this.createLayout(root, `${back}`);

    this.createTitle(mealData.title);
    this.createMedia(mealData.media);
    this.createDescription(mealData.description, `${desc}`);
    this.createNutrition(mealData.nutrition);
    this.createSteps(mealData.steps, `${steps}`, `${step}`);
    this.createIngredients(mealData.ingredients, `${ingredients}`);
  }

  createLayout(root: HTMLElement, button: string) {
    this.layout.meal = document.createElement("section");
    this.layout.meal.className = "meal wrapper";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "meal__wrapper cards__container";

    this.layout.back = backButton.render(`${button}`, Routing.MEALS);

    this.layout.img = document.createElement("div");
    this.layout.img.className = "meal__img";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "meal__content";

    this.layout.wrapper.append(
      this.layout.back,
      this.layout.img,
      this.layout.content
    );

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "meal__title title";

    this.layout.info = document.createElement("div");
    this.layout.info.className = "meal__info layout-2-columns";

    this.layout.tutorial = document.createElement("div");
    this.layout.tutorial.className = "meal__tutorial layout-2-columns";

    this.layout.ingredients = document.createElement("div");
    this.layout.ingredients.className = "meal__ingredients ingredients";

    this.layout.steps = document.createElement("div");
    this.layout.steps.className = "meal__steps meal-steps";

    this.layout.content.append(
      this.layout.title,
      this.layout.info,
      this.layout.tutorial
    );

    this.layout.meal.append(this.layout.wrapper);

    root.replaceChildren(this.layout.meal);
  }

  createTitle(title: string) {
    this.layout.title.textContent = title;
  }

  createMedia(media: string) {
    this.layout.img.innerHTML = `<img src="${
      MediaEndpoint.MEAL + media
    }" alt="Meal Image">`;
  }

  createDescription(description: string, title: string) {
    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "meal__desc meal-desc";

    this.layout.descTitle = document.createElement("h3");
    this.layout.descTitle.className = "meal-desc__title title";
    this.layout.descTitle.textContent = title;

    this.layout.descText = document.createElement("p");
    this.layout.descText.className = "meal-desc__text";
    this.layout.descText.textContent = description;

    this.layout.desc.append(this.layout.descTitle, this.layout.descText);

    this.layout.info.append(this.layout.desc);
  }

  createNutrition({ calories, fat, protein, carbs }: Nutrition) {
    const { nutrition, calorie, fats, proteins, carb } = getMealLang();

    this.layout.nutrition = document.createElement("div");
    this.layout.nutrition.className = "meal__nutrition nutrition";

    this.layout.nutritonTitle = document.createElement("h3");
    this.layout.nutritonTitle.className = "nutrition__title title";
    this.layout.nutritonTitle.textContent = `${nutrition}`;

    this.layout.nutritonList = document.createElement("ul");
    this.layout.nutritonList.className =
      "nutrition__list tags layout-2-columns";
    this.layout.nutritonList.innerHTML = `<li class="nutrition__item tag tag--rounded">
                                        <span class="nutrition__icon icon icon--kcal"></span>
                                        ${calories} ${calorie}
                                    </li>
                                    <li class="nutrition__item tag tag--rounded">
                                        <span class="nutrition__icon icon icon--fats"></span>
                                        ${fat} ${fats}
                                    </li>
                                    <li class="nutrition__item tag tag--rounded">
                                        <span class="nutrition__icon icon icon--proteins"></span>
                                        ${protein} ${proteins}
                                    </li>
                                    <li class="nutrition__item tag tag--rounded">
                                        <span class="nutrition__icon icon icon--carbs"></span>
                                        ${carbs} ${carb}
                                    </li>`;

    this.layout.nutrition.append(
      this.layout.nutritonTitle,
      this.layout.nutritonList
    );

    this.layout.info.append(this.layout.nutrition);
  }

  createIngredients(ingredients: Ingredients[], title: string) {
    this.layout.ingredientsTitle = document.createElement("h3");
    this.layout.ingredientsTitle.className = "ingredients__title title";
    this.layout.ingredientsTitle.textContent = title;

    this.layout.ingredientsList = document.createElement("ul");
    this.layout.ingredientsList.className =
      "ingredients__list layout-4-columns";

    ingredients.forEach(({ amount, unit, name }) => {
      this.layout.ingredientsList.innerHTML += `<li class="ingredients__item">
                                    <div class="ingredients__data">
                                      <span class="ingredients__amount">${amount}</span>
                                      <span class="ingredients__unit">${unit}</span>
                                    </div>
                                    <span class="ingredients__name">${name}</span>
                                </li>`;
    });

    this.layout.ingredients.append(
      this.layout.ingredientsTitle,
      this.layout.ingredientsList
    );

    this.layout.tutorial.append(this.layout.ingredients);
  }

  createSteps(steps: string[], title: string, step: string) {
    this.layout.stepsTitle = document.createElement("h3");
    this.layout.stepsTitle.className = "meal-steps__title title";
    this.layout.stepsTitle.textContent = title;

    this.layout.stepsList = document.createElement("ul");
    this.layout.stepsList.className = "meal-steps__list";

    for (let i = 0; i < steps[0].length; i++) {
      this.layout.stepsList.innerHTML += `<li class="meal-steps__item">
                                    <span class="meal-steps__step">${step} ${
        i + 1
      }</span>
                                    <span class="meal-steps__text">${
                                      steps[0][i]
                                    }</span>
                                </li>`;
    }

    this.layout.steps.append(this.layout.stepsTitle, this.layout.stepsList);

    this.layout.tutorial.append(this.layout.steps);
  }
}

export default new MealView();
