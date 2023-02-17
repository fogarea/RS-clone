import EventEmitter from "utils/observer.utils";
import { Meals } from "types/meal.types";
import { state } from "../store/state";

class MealsModel extends EventEmitter {
  update(meals: Meals) {
    state.meals = { ...meals };
  }
}

export default new MealsModel();
