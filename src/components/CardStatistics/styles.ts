import { ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";

export type CardStyleProps = "PRIMARY" | "SUCCESS" | "DANGER";

type Props = {
  type: CardStyleProps;
  style?: ViewStyle;
};

export const Container = styled.View<Props>`
  min-height: 102px;
  max-height: 102px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin: 6px 0;
  padding: 12px;

  background-color: ${({ theme, type }) => {
    switch (type) {
      case "SUCCESS":
        return theme.COLORS.GREEN_LIGHT;
      case "PRIMARY":
        return theme.COLORS.GRAY_600;
      case "DANGER":
        return theme.COLORS.RED_LIGHT;
      default:
        return theme.COLORS.GRAY_200;
    }
  }};
`;

export const CardStatisticsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const CardStatisticsSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;
