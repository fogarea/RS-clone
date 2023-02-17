export type Nutrition = {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};

export type Ingredients = {
  amount: string;
  unit: string;
  name: string;
};

export type Meal = {
  title: string;
  description: string;
  nutrition: Nutrition;
  time: number;
  ingredients: Ingredients[];
  steps: string[];
  media: string;
  type: string;
  id: string;
};

export type Meals = {
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
};
