import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateMeal } from "@screens/CreateMeal";
import { Feedback } from "@screens/Feedback";

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="createmeal" component={CreateMeal} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
}
