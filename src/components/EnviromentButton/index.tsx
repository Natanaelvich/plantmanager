import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface EnviromentButtonProps extends RectButtonProperties {
  title: string;
  active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <Container {...rest} isActive={active}>
      <Title isActive={active}>{title}</Title>
    </Container>
  );
};

export default EnviromentButton;
