import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SvgFromUri } from 'react-native-svg';

import {
  Container,
  PlantInfo,
  PlantName,
  Description,
  Controller,
  TipContainer,
  Image,
  TipText,
  AlertLabel,
} from './styles';

import waterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[];
    frequency: {
      times: number;
      repeat_every: string;
    };
  };
}

const PlantSave: React.FC = () => {
  const route = useRoute();
  const { plant } = route.params as Params;

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} height={150} width={150} />

        <PlantName>{plant.name}</PlantName>
        <Description>{plant.about}</Description>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <Image source={waterDrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

        <Button title="Cadastrar planta" onPress={() => {}} />
      </Controller>
    </Container>
  );
};

export default PlantSave;
