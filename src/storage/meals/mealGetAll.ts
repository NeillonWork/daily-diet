import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: string[] = storage ? JSON.parse(storage) : [];

    console.log(meals)
    return meals;
  } catch (error) {
    throw error;
  }
}
