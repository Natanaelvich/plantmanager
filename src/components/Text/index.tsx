import React from 'react';
import { TextProps } from 'react-native';

import { Container } from './styles';

export interface Props extends TextProps {
  heading?: boolean;
}

const Text: React.FC<Props> = ({ heading, children, ...rest }) => (
  <Container {...{ heading }} {...rest}>
    {children}
  </Container>
);

export default Text;
