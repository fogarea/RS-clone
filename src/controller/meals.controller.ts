import mealsService from "../service/meals.service";
import mealsModel from "../model/meals.model";
import { state } from "../store/state";
import { Meals } from "types/meal.types";
import achievementsController from "./achievements.controller";
import { Achievements } from "types/achievements.types";

class MealsController {
  async getAll() {
    const { status, ...meals } = await mealsService.getAll();

    if (status === 404) return;

    mealsModel.update(meals);
  }

  getMeal(id: string, category: keyof Meals) {
    this.updateMealAchievement();
    return state.meals[category].find((meal) => meal.id === id);
  }

  async updateMealAchievement() {
    await achievementsController.updateAchievements(
      "salad" as keyof Achievements,
      true
    );
  }
}

export default new MealsController();
