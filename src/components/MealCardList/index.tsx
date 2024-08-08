import { Text, TouchableOpacityProps } from "react-native";
import {
  Container,
  DescMealData,
  DescMealName,
  Form,
  PipeSpace,
  CircleIcon,
  CircleIconStyledProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  date?: string;
  desc?: string;
  name?: string;
  description?: string;
  hours?: string;
  dietSuccess: boolean;
  type?: CircleIconStyledProps;
};

export function MealCardList({
  desc,
  date,
  name,
  description,
  hours,
  dietSuccess,
  type,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <Form>
        <DescMealData>{hours}</DescMealData>
        <PipeSpace />
        <DescMealName>{name}</DescMealName>

        <Text>
          {" "}
          {dietSuccess ? (
            <CircleIcon type="SUCCESS" />
          ) : (
            <CircleIcon type="DANGER" />
          )}
        </Text>
      </Form>
    </Container>
  );
}
