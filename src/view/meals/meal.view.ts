import { state } from "store/state";
import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import navigationController from "controller/navigation.controller";
import mealsController from "../../controller/meals.controller";
import { Ingredients, Meals, Nutrition } from "types/meal.types";

const MEDIA_ENDPOINT =
  "https://raw.githubusercontent.com/fogarea/assets/fitness/meals/";

class MealView {
  mealId = "";

  layout = {} as Layout;

  async init(root: HTMLElement, category: keyof Meals, mealId: string) {
    this.mealId = mealId;

    const mealData = mealsController.getMeal(this.mealId, category);

    if (!mealData) return;

    this.createLayout(root);

    this.createTitle(mealData.title);
    this.createMedia(mealData.media);
    this.createDescription(mealData.description);
    this.createNutrition(mealData.nutrition);
    this.createIngredients(mealData.ingredients);
    this.createSteps(mealData.steps);

    this.renderBackButton();
    this.addHandlers();
  }

  createLayout(root: HTMLElement) {
    this.layout.meal = document.createElement("section");
    this.layout.meal.className = "meal cards__container wrapper";

    this.layout.back = document.createElement("span");
    this.layout.back.className = "aside__back-btn";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "meal__wrapper";

    this.layout.meal.append(this.layout.back, this.layout.wrapper);

    this.layout.img = document.createElement("div");
    this.layout.img.className = "meal__img";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "meal__content";

    this.layout.wrapper.append(this.layout.img, this.layout.content);

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "meal__title title";

    this.layout.info = document.createElement("div");
    this.layout.info.className = "meal__info layout-2-columns";

    this.layout.ingredients = document.createElement("div");
    this.layout.ingredients.className = "meal__ingredients ingredients";

    this.layout.steps = document.createElement("div");
    this.layout.steps.className = "meal__steps meal-steps";

    this.layout.content.append(
      this.layout.title,
      this.layout.info,
      this.layout.ingredients,
      this.layout.steps
    );

    root.replaceChildren(this.layout.meal);
  }

  createTitle(title: string) {
    this.layout.title.textContent = title;
  }

  createMedia(media: string) {
    this.layout.img.innerHTML = `<img src="${
      MEDIA_ENDPOINT + media
    }" alt="Meal Image">`;
  }

  createDescription(description: string) {
    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "meal__desc meal-desc";

    this.layout.descTitle = document.createElement("h3");
    this.layout.descTitle.className = "meal-desc__title title";
    this.layout.descTitle.textContent = "Description";

    this.layout.descText = document.createElement("p");
    this.layout.descText.className = "meal-desc__text";
    this.layout.descText.textContent = description;

    this.layout.desc.append(this.layout.descTitle, this.layout.descText);

    this.layout.info.append(this.layout.desc);
  }

  createNutrition({ calories, fat, protein, carbs }: Nutrition) {
    this.layout.nutrition = document.createElement("div");
    this.layout.nutrition.className = "meal__nutrition nutrition";

    this.layout.nutritonTitle = document.createElement("h3");
    this.layout.nutritonTitle.className = "nutrition__title title";
    this.layout.nutritonTitle.textContent = "Nutrition";

    this.layout.nutritonList = document.createElement("ul");
    this.layout.nutritonList.className =
      "nutrition__list tags layout-2-columns";
    this.layout.nutritonList.innerHTML = `<li class="nutrition__item tag tag--rounded">
                                        <span class="nutrition__icon icon icon--kcal"></span>
                                        ${calories}kCal
                                    </li>
                                    <li class="nutrition__item tag tag--rounded">
                                        <span class="nutrition__icon icon icon--fats"></span>
                                        ${fat} fats
                                    </li>
                                    <li class="nutrition__item tag tag--rounded">
                                        <span class="nutrition__icon icon icon--proteins"></span>
                                        ${protein} proteins
                                    </li>
                                    <li class="nutrition__item tag tag--rounded">
                                        <span class="nutrition__icon icon icon--carbs"></span>
                                        ${carbs} carbo
                                    </li>`;

    this.layout.nutrition.append(
      this.layout.nutritonTitle,
      this.layout.nutritonList
    );

    this.layout.info.append(this.layout.nutrition);
  }

  createIngredients(ingredients: Ingredients[]) {
    this.layout.ingredientsTitle = document.createElement("h3");
    this.layout.ingredientsTitle.className = "ingredients__title title";
    this.layout.ingredientsTitle.textContent = "Ingredients";

    this.layout.ingredientsList = document.createElement("ul");
    this.layout.ingredientsList.className =
      "ingredients__list tags layout-4-columns";

    ingredients.forEach(({ amount, unit, name }) => {
      this.layout.ingredientsList.innerHTML += `<li class="ingredients__item tag tag--squared">
                                    <span class="ingredients__amount">${amount} ${unit}</span>
                                    <span class="ingredients__name">${name}</span>
                                </li>`;
    });

    this.layout.ingredients.append(
      this.layout.ingredientsTitle,
      this.layout.ingredientsList
    );
  }

  createSteps(steps: string[]) {
    this.layout.stepsTitle = document.createElement("h3");
    this.layout.stepsTitle.className = "meal-steps__title title";
    this.layout.stepsTitle.textContent = "Step by Step";

    this.layout.stepsList = document.createElement("ul");
    this.layout.stepsList.className = "meal-steps__list";

    console.log("steps", steps);
    steps.forEach((step, index) => {
      this.layout.stepsList.innerHTML += `<li class="meal-steps__item">
                                    <span class="meal-steps__step">Step ${
                                      index + 1
                                    }</span>
                                    <span class="meal-steps__text">${step}</span>
                                </li>`;
    });

    this.layout.steps.append(this.layout.stepsTitle, this.layout.stepsList);
  }

  renderBackButton() {
    const icon = document.createElement("span");
    icon.className = "icon icon--arrow";

    const backBtn = document.createElement("a");
    backBtn.textContent = `${"Meals"}`;
    backBtn.href = state.basePath + Routing.MEALS;

    this.layout.back.append(icon, backBtn);
  }

  addHandlers() {
    this.layout.back.addEventListener("click", (e: Event) => {
      navigationController.route(e);
    });
  }
}

export default new MealView();
