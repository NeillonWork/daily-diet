import { TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps & {};

export function TextArea({ ...rest }: Props) {
  return (
    <Container
      multiline
      numberOfLines={4}
      maxLength={150}
      style={{ textAlignVertical: "top" }}
      {...rest}
    ></Container>
  );
}
