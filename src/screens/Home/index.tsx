import { SectionList } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { MealCardList } from "@components/MealCardList";
import { InfoButtons } from "@components/InfoButtons";
import { mealGetAll } from "@storage/meals/mealGetAll";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

import {
  Container,
  Form,
  TextHeaderList,
  Title,
  ViewHeaderList,
} from "./styles";
import { calculatePercentage } from "src/utils/percentagem";

type MealSection = {
  title: string;
  data: MealStorageDTO[];
};

export function Home() {
  const navigation = useNavigation();
  const [mealList, setMealList] = useState<MealSection[]>([]);
  const [percent, setPercent] = useState("0");

  function handleEditMeals(meal: string) {
    navigation.navigate("editmeals");
  }

  //Calc porcentagem
  async function Calculate(){
    const result = await mealGetAll();
    const newPercentage = calculatePercentage(result)

    setPercent(newPercentage)
  }

  //recupera dados
  async function fetchMeals() {
    try {
      const storedMeals: MealStorageDTO[] = await mealGetAll();

      const formattedMeals: MealSection[] = storedMeals.reduce(
        (acc: MealSection[], meal) => {
          const existingSection = acc.find(
            (section) => section.title === meal.date
          );

          if (existingSection) {
            existingSection.data.push(meal);
          } else {
            acc.push({
              title: meal.date,
              data: [meal],
            });
          }
          return acc
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
      Calculate();
    }, [])
  );

  return (
    <Container>
      <Header />
      <InfoButtons

    title={`${percent}%`}
       
        subtitle="das refeições dentro da dieta"
        onPress={() => navigation.navigate("statistics", {percent})}
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <MealCardList
            hours={item.hours}
            name={item.name}
            dietSuccess={item.dietSuccess}
            // dietSuccess={item.dietSuccess}
            //  description={item.description}
            // date={item.date}
            //  dietSuccess={item.dietSuccess}

            onPress={() => handleEditMeals(item.name)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ViewHeaderList>
            <TextHeaderList>{title}</TextHeaderList>
          </ViewHeaderList>
        )}
      />
    </Container>
  );
}
