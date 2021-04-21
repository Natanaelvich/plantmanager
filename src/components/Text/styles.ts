import styled from 'styled-components';
import { Text } from 'react-native';
import { Props } from './index';
import fonts from '../../styles/fonts';

export const Container = styled(Text)<Props>`
  font-family: ${({ heading }) => (heading ? fonts.heading : fonts.text)};
`;
