import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  background: ${props => (props.isActive ? colors.green_light : colors.shape)};
  width: 76px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-right: 5px;
`;

export const Title = styled.Text<ButtonProps>`
  color: ${props => (props.isActive ? colors.green_dark : colors.heading)};
  font-family: ${props => (props.isActive ? fonts.heading : fonts.text)};
`;
