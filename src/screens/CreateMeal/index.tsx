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
import { Input } from "@components/Input";
import { TextArea } from "@components/TextArea";
import { Filter } from "@components/Filter";
import { Button } from "@components/Button";

export function CreateMeal() {
  return (
    <Container>
      <TopStyle>
        <Header ShowBackButton title="Nova refeição" />
      </TopStyle>

      <Section>
        <Form>
          <FormText>Nome</FormText>
          <Input />

          <FormText>Descrição</FormText>
          <TextArea />

          <FormRow>
            <ViewRow>
              <FormText>Data</FormText>
              <Input />
            </ViewRow>

            <ViewRow>
              <FormText>Hora</FormText>
              <Input />
            </ViewRow>
          </FormRow>

          <FormText>Está dentro da dieta?</FormText>
          <FormRow>
            <ViewRow>
              <Filter title="Sim" isActive />
            </ViewRow>
            <ViewRow>
              <Filter title="Não" />
            </ViewRow>
          </FormRow>

          <ButtonContainer>
            <Button title="Cadastrar refeição" type="DARK" typeIcon="ADD" />
          </ButtonContainer>
        </Form>
      </Section>
    </Container>
  );
}
