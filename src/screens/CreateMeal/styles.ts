import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
export const TopStyle = styled.View`
  padding: 0 24px;
`;

export const Section = styled.View`
 flex: 1;
 
  padding: 24px;
  margin-top: 24px;
  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Form = styled.View`
  margin-top: 15px;
  justify-content: space-between;
`;

export const FormText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin: 25px 0 5px 0;
`;

export const FormRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewRow = styled.View`
  width: 48%;
  margin-bottom: 12px;
`;

export const ButtonContainer = styled.View`
margin-top: 40px;
`