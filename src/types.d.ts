export interface Meal {
  calories: number;
  category: string;
  mealDesc: string;
}

export interface MealsJson {
  [id: string]: Meal
}