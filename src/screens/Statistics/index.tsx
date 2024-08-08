import { Header } from "@components/Header";
import {
  FormIndicators,
  GeneralStatistics,
  GeneralStatisticsTitle,
  IndicatorsSubTitle,
  IndicatorsTitle,
  TopCard,
  Form,
  Container,
} from "./styles";
import { CardStatistics } from "@components/CardStatistics";
import { useRoute } from "@react-navigation/native";

type RouterParams = {
  percent: string;
};

export function Statistics() {
  const route = useRoute();

  const { percent } = route.params as RouterParams;

  return (
    <Container>
      <TopCard>
        <Header ShowBackButton />

        <FormIndicators>
          <IndicatorsTitle>{percent}%</IndicatorsTitle>
          <IndicatorsSubTitle>das refeições dentro da dieta</IndicatorsSubTitle>
        </FormIndicators>
      </TopCard>

      <GeneralStatistics>
        <GeneralStatisticsTitle>Estatísticas gerais</GeneralStatisticsTitle>

        <CardStatistics type="PRIMARY" style={{ width: "100%" }} />
        <CardStatistics type="PRIMARY" style={{ width: "100%" }} />

        <Form>
          <CardStatistics type="SUCCESS" style={{ width: "48%" }} />
          <CardStatistics type="DANGER" style={{ width: "48%" }} />
        </Form>
      </GeneralStatistics>
    </Container>
  );
}
