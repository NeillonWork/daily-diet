import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { Circle } from "phosphor-react-native";

type ButtonStyleProps = "YES" | "NO";

export type FilterStyleProps = {
  type: ButtonStyleProps;
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  min-height: 50px;
  max-height: 50px;

  justify-content: center;
  align-items: center;

  ${({ theme, type, isActive }) =>
    type === "YES" &&
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_DARK};
      background-color: ${theme.COLORS.GREEN_MID};
    `}

  ${({ theme, type, isActive }) =>
    type === "NO" &&
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.RED_DARK};
      background-color: ${theme.COLORS.RED_LIGHT};
    `}

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      background-color: ${theme.COLORS.GRAY_600};
    `}
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ButtonIcon = styled.View<FilterStyleProps>`
  width: 12px;
  min-height: 12px;
  max-height: 12px;

  border-radius: 999px;
  margin-right: 10px;

  ${({ theme, type, isActive }) =>
    type === "YES" &&
    isActive &&
    css`
      background-color: ${theme.COLORS.GREEN_DARK};
    `}

  ${({ theme, type, isActive }) =>
    type === "NO" &&
    isActive &&
    css`
      background-color: ${theme.COLORS.RED_DARK};
    `}


    ${({ theme, type, isActive }) =>
    type === "YES" &&
    !isActive &&
    css`
      background-color: ${theme.COLORS.GREEN_DARK};
    `}

    ${({ theme, type, isActive }) =>
    type === "NO" &&
    !isActive &&
    css`
      background-color: ${theme.COLORS.RED_DARK};
    `}
`;
