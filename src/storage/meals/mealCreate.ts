import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealCreate(newMeal: string) {
  try {
    const storedMeals = await mealGetAll();

    const storedExists = storedMeals.includes(newMeal);

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
