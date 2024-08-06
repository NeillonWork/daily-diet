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
import { useState } from "react";
import { SectionList } from "react-native";
import { MealCardList } from "@components/MealCardList";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  const [mealList, setMealList] = useState([
    {
      title: "12.08.22",
      data: ["20:00 | X-Tudo", "14:00 | Salada", "13:00 | Porção"],
    },
    {
      title: "14.05.22",
      data: ["20:00 | X-Tudo", "14:00 | Salada", "13:00 | Porção"],
    },
    {
      title: "14.05.22",
      data: [" ", " ", " ", " "],
    },
  ]);
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
      <Button title="Nova refeição" typeIcon="ADD" onPress={() => navigation.navigate("createmeal")}/>

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
