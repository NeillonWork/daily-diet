import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { mealCreate } from "@storage/meals/mealCreate";

import { Input } from "@components/Input";
import { TextArea } from "@components/TextArea";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import {
  Container,
  Form,
  FormText,
  Section,
  TopStyle,
  FormRow,
  ViewRow,
  ButtonContainer,
} from "./styles";


export function CreateMeal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hours, sethours] = useState("");
  const [dietSuccess, setDietSuccess] = useState(true);

  const navigate = useNavigation();

  async function handleNewMeal() {

    const newMeal = {
      name,
      description,
      date,
      hours,
      dietSuccess,
    };

    await mealCreate(newMeal);

    navigate.navigate("feedback", { dietSuccess });
  }

  return (
    <Container>
      <TopStyle>
        <Header ShowBackButton title="Nova refeição" />
      </TopStyle>

      <Section>
        <Form>
          <FormText>Nome</FormText>
          <Input value={name} onChangeText={setName} />

          <FormText>Descrição</FormText>
          <TextArea value={description} onChangeText={setDescription} />

          <FormRow>
            <ViewRow>
              <FormText>Data</FormText>
              <Input value={date} onChangeText={setDate} />
            </ViewRow>

            <ViewRow>
              <FormText>Hora</FormText>
              <Input value={hours} onChangeText={sethours} />
            </ViewRow>
          </FormRow>

          <FormText>Está dentro da dieta?</FormText>
          <FormRow>
            <ViewRow>
              <Filter
               type={"YES"}
                isActive={dietSuccess}
                title="Sim"
                onPress={() => setDietSuccess(true)}
              />
            </ViewRow>
            <ViewRow>
              <Filter
               type={"NO"}
                isActive={!dietSuccess}
                title="Não"
                onPress={() => setDietSuccess(false) }
              />
            </ViewRow>
          </FormRow>

          <ButtonContainer>
            <Button
              title="Cadastrar refeição"
              type="DARK"
              typeIcon="ADD"
              onPress={handleNewMeal}
            />
          </ButtonContainer>
        </Form>
      </Section>
    </Container>
  );
}
