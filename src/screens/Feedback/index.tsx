import { Button } from "@components/Button";
import {
  Container,
  FeedbackImg,
  Section,
  SectionButton,
  SubTitle,
  Title,
} from "./styles";

import logoSuccess from "@assets/success.png";
import logoUnsuccess from "@assets/unsuccess.png";
import { useNavigation } from "@react-navigation/native";

export function Feedback() {
  const navigator = useNavigation();

  return (
    <Container>
      <Section>
        <Title>Continue assim!</Title>
        <SubTitle>Você continua dentro da dieta. Muito bem!</SubTitle>
      </Section>

      <FeedbackImg source={logoSuccess} />

      <SectionButton>
        <Button
          title="Ir para a página inicial"
          type="DARK"
          typeIcon="ADD"
          onPress={() => navigator.navigate("home")}
        />
      </SectionButton>
    </Container>
  );
}
