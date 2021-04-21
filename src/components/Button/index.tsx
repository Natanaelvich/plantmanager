import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Label } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<Props> = ({ title, ...rest }) => (
  <Container {...rest}>
    <Label>{title}</Label>
  </Container>
);

export default Button;
