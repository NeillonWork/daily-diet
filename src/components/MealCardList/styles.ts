import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type CircleIconStyledProps = "SUCCESS" | "DANGER";

type Props = {
  type: CircleIconStyledProps;
};

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

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescMealData = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const PipeSpace = styled.View`
  width: 1px;

  min-height: 14px;
  max-height: 14px;
  margin: 0 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const DescMealName = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const CircleIcon = styled.View<Props>`
  width: 14px;

  min-height: 14px;
  max-height: 14px;

  margin: 0 6px;

  border-radius: 999px;

  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
