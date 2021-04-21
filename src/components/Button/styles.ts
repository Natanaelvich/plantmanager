import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Text from '../Text';
import colors from '../../styles/colors';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 20px;
  height: 56px;
  padding: 0 20px;
  width: 100%;
`;

export const Label = styled(Text).attrs({
  heading: true,
})`
  text-align: center;
  font-size: 16px;
  color: ${colors.white};
`;
