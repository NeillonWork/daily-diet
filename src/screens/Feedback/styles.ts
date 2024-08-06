import styled, { css } from "styled-components/native";

export type TextStyleProps = "SUCCESS" | "FAILURE";

type Props = {
  type: TextStyleProps;
};

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  justify-content: center;
  align-items: center;
`;
export const Section = styled.View``;

export const Title = styled.Text<Props>`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const FeedbackImg = styled.Image`
  margin: 24px;
`;

export const SectionButton = styled.View`
  width: 100%;
`;
