import { useNavigation, useRoute } from "@react-navigation/native";

import logoSuccess from "@assets/success.png";
import logoUnsuccess from "@assets/unsuccess.png";

import { Button } from "@components/Button";
import {
  Container,
  FeedbackImg,
  Section,
  SectionButton,
  SubTitle,
  Title,
} from "./styles";

type RouteParams = {
  dietSuccess: boolean;
};

export function Feedback() {
  const route = useRoute();
  const { dietSuccess } = route.params as RouteParams;

  const navigator = useNavigation();

  return (
    <Container>
      <Section>
        {dietSuccess === true ? (
          <Title type="SUCCESS">Continue assim!</Title>
        ) : (
          <Title type="FAILURE">Que pena!</Title>
        )}
        {dietSuccess === true ? (
          <SubTitle>Você continua dentro da dieta. Muito bem!</SubTitle>
        ) : (
          <SubTitle>
            Você saiu da dieta dessa vez, mas continue se esforçando e não
            desista!
          </SubTitle>
        )}
      </Section>

      {dietSuccess === true ? (
        <FeedbackImg source={logoSuccess} />
      ) : (
        <FeedbackImg source={logoUnsuccess} />
      )}

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
