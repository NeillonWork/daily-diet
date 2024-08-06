import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 120px;
  max-height: 120px;

  border-width: 1px;
  border-radius: 6px;

  padding: 14px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
