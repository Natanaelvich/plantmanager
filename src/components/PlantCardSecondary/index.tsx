import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { Container, Title, Details, TimeLabel, Time } from './styles';

interface PlantsProps extends RectButtonProperties {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export const PlantCardSecondary: React.FC<PlantsProps> = ({
  data,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <Title>{data.name}</Title>

      <Details>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{data.hour}</Time>
      </Details>
    </Container>
  );
};
