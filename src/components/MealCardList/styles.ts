import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;

  min-height: 49px;
  max-height: 49px;

  border-radius: 6px;
  margin-bottom: 6px;

  justify-content: center;
  padding: 0 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Form = styled.View``;

export const DescMealTitle = styled.Text`
  font-size: 18px;
  color: black;
`;
