import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, IconWrapper, Title } from "./styles";
import { Plus, Trash, Pencil } from "phosphor-react-native";

export type ButtonTypeIconProps = "ADD" | "DELETE" | "EDIT";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  typeIcon?: ButtonTypeIconProps;
};

const iconMap = {
  ADD: Plus,
  DELETE: Trash,
  EDIT: Pencil,
};

export function Button({ title, type = "DARK", typeIcon, ...rest }: Props) {
  const IconComponent = iconMap[typeIcon];

  return (
    <Container type={type} {...rest}>
      <IconWrapper>
        <IconComponent
          color={type === "DARK" ? "#FFFFFF" : "#000000"}
          size={24}
        />
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
}
