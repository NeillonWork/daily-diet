import { TouchableOpacityProps } from "react-native";
import {
  Container,
  SubTitle,
  Title,
  ButtonTypeStyleProps,
  TopIcon,
  Form,
  FormIcon,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  type?: ButtonTypeStyleProps;
};

export function InfoButtons({
  title,
  subtitle,
  type = "SUCCESS",
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <FormIcon>
        <TopIcon type={type}/>
      </FormIcon>
      <Form>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Form>
    </Container>
  );
}
