import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { Container, Title } from './styles';

interface PlantsProps extends RectButtonProperties {
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardPrimary: React.FC<PlantsProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Title>{data.name}</Title>
    </Container>
  );
};

export default PlantCardPrimary;
