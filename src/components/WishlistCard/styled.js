import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 255px;
  background: #FFFFFF;
  border-radius: 15px;
  padding: 24px;
  elevation: 2.5;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  margin: 37px 0;
  font-family: sans-serif;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 24px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  max-width: 207px;
  width: 100%;
  background: ${({ bgColor }) => bgColor == 'add' ? '#3FCA6E' : '#FB5D5D'};
  border-radius: 13px;
`;

export const ButtonLabel = styled.Text`
  color: #FFFAFA;
  margin-left: 16px;
  font-family: sans-serif;
  font-weight: 700;
`;

export const Icon = styled(Ionicons)`
  color: #FFFAFA;
`
