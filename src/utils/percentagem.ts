import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export const calculatePercentage = (mealsList: MealStorageDTO[]) => {
  let total = mealsList.length;

  if (total === 0) {
    total = 0.0000000000000000001;
  }

  const mealsWithinDiet = mealsList.filter((meal) => {
    return meal.dietSuccess === true;
  });

  const percentage = (mealsWithinDiet.length / total) * 100;

  return percentage.toFixed(2);
};
