import { ViewStyle } from "react-native";
import {
  CardStatisticsSubTitle,
  CardStatisticsTitle,
  Container,
  CardStyleProps,
} from "./styles";

type Props = {
  type: CardStyleProps;
  style?: ViewStyle;
};

export function CardStatistics({ type, style }: Props) {
  return (
    <Container type={type} style={style}>
      <CardStatisticsTitle>22</CardStatisticsTitle>
      <CardStatisticsSubTitle>refeições dentro da dieta</CardStatisticsSubTitle>
    </Container>
  );
}
