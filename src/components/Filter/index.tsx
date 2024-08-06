import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Title,
  FilterStyleProps,
  ButtonIcon,
  ButtonContainer,
} from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <ButtonContainer>
        <ButtonIcon isActive={isActive} {...rest} />
        <Title>{title}</Title>
      </ButtonContainer>
    </Container>
  );
}
