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

export function Statistics() {
  return (
    <Container>
      <TopCard>
        <Header ShowBackButton />

        <FormIndicators>
          <IndicatorsTitle>90,86%</IndicatorsTitle>
          <IndicatorsSubTitle>das refeições dentro da dieta</IndicatorsSubTitle>
        </FormIndicators>
      </TopCard>

      <GeneralStatistics>
        <GeneralStatisticsTitle>Estatísticas gerais</GeneralStatisticsTitle>

        <CardStatistics type="PRIMARY" style={{ width: "100%" }} />
        <CardStatistics  type="PRIMARY" style={{ width: "100%" }} />

        <Form>
          <CardStatistics  type="SUCCESS" style={{ width: "48%" }} />
          <CardStatistics type="DANGER" style={{ width: "48%" }} />
        </Form>
      </GeneralStatistics>
    </Container>
  );
}
