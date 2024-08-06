import { InfoButtons } from "@components/InfoButtons";
import {
  Container,
  Form,
  TextHeaderList,
  Title,
  ViewHeaderList,
} from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { MealCardList } from "@components/MealCardList";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meals/mealGetAll";

interface Meal {
  name: string;
  description: string;
  date: string;
  hours: string;
  dietSuccess: boolean;
}

interface MealSection {
  title: string;
  data: string[];
}

export function Home() {
  const navigation = useNavigation();
  const [mealList, setMealList] = useState<MealSection[]>([]);

  async function fetchMeals() {
    try {
      const storedMeals: Meal[] = await mealGetAll();

      const formattedMeals: MealSection[] = storedMeals.reduce(
        (acc: MealSection[], meal) => {
          const existingSection = acc.find(
            (section) => section.title === meal.date
          );

          if (existingSection) {
            existingSection.data.push(`${meal.hours} | ${meal.name}`);
          } else {
            acc.push({
              title: meal.date,
              data: [`${meal.hours} | ${meal.name}`],
            });
          }
          return acc;
        },
        []
      );

      setMealList(formattedMeals);
    } catch (error) {
      console.error("Erro ao recuperar refeições:", error);
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header />
      <InfoButtons
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        onPress={() => navigation.navigate("statistics")}
      />

      <Form>
        <Title>Refeições</Title>
      </Form>
      <Button
        title="Nova refeição"
        typeIcon="ADD"
        onPress={() => navigation.navigate("createmeal")}
      />

      <SectionList
        sections={mealList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <MealCardList desc={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <ViewHeaderList>
            <TextHeaderList>{title}</TextHeaderList>
          </ViewHeaderList>
        )}
      />
    </Container>
  );
}
