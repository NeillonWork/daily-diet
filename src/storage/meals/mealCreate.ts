import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();

  const storedExists = storedMeals.find(name => name.name === newMeal.name);

  console.log(storedExists)

    if (storedExists) {
      console.log("JA EXISTE ESSES DADOS");
      return;
    }

    const updatedMeals = [...storedMeals, newMeal];

  //return  await AsyncStorage.clear()
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    throw error;
  }
}
