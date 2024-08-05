import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TopCard = styled.View`
  width: 100%;

  min-height: 200px;
  max-height: 200px;

  padding: 0 24px;
  flex-direction: column;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`;

export const FormIndicators = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const IndicatorsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
export const IndicatorsSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const GeneralStatistics = styled.View`
  width: 100%;
  padding: 24px;
  align-items: center;
  position: absolute;
  top: 180px;

  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.COLORS.WHITE};


`;

export const GeneralStatisticsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 16px
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between; /* Garante que os itens sejam espaçados uniformemente */
  flex-wrap: wrap; /* Permite quebra de linha se os itens não couberem */
`;

