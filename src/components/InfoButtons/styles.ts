import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type ButtonTypeStyleProps = "SUCCESS" | "DANGER";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  flex-direction: column;
  min-height: 102px;
  padding: 6px;
  border-radius: 6px;

  margin-top: 30px;

  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_LIGHT};
`;

export const FormIcon = styled.View`
  width: 100%;
  height: 10px;
  align-items: flex-end;
`;

export const TopIcon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "SUCCESS" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const Form = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
