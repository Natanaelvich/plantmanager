import React, { useState } from 'react';
import { Platform, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgFromUri } from 'react-native-svg';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

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
  DateTimePickerButton,
  DateTimePickerText,
} from './styles';

import waterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';
import { savePlant } from '../../libs/storage';

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    hour: string;
    environments: string[];
    frequency: {
      times: number;
      repeat_every: string;
    };
  };
}

const PlantSave: React.FC = () => {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  async function handleSave(): Promise<void> {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Muito Obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });
    } catch {
      Alert.alert('Não foi possível salvar! 😢');
    }
  }

  function handleChangeTime(event: Event, dateTime: Date | undefined): void {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰');
    }

    if (dateTime) setSelectedDateTime(dateTime);
  }

  function handleOpenDateTimePickerForAndroid(): void {
    setShowDatePicker(oldState => !oldState);
  }

  return (
    <ScrollView>
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

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <DateTimePickerButton onPress={handleOpenDateTimePickerForAndroid}>
              <DateTimePickerText>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </DateTimePickerText>
            </DateTimePickerButton>
          )}

          <Button
            title="Cadastrar planta"
            onPress={() => {
              handleSave();
            }}
          />
        </Controller>
      </Container>
    </ScrollView>
  );
};

export default PlantSave;
