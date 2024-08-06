import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  padding: 14px;

  min-height: 48px;
  max-height: 48px;

  border-width: 1px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color:${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`;
