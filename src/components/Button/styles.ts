import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "DARK" | "LIGHT";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;

  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type }) =>
    type === "DARK" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_600};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const IconWrapper = styled.View`
  margin-right: 8px;
`;
