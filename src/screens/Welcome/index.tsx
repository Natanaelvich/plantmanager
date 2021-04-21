import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Wrapper,
  WelcomeImage,
  Title,
  Subtitle,
  NextButton,
  NextButtonIcon,
} from './styles';

import wateringImg from '../../assets/watering.png';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = (): void => {
    navigation.navigate('UserIdentification');
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Title>
        <WelcomeImage source={wateringImg} />
        <Subtitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Subtitle>

        <NextButton onPress={handleStart}>
          <NextButtonIcon />
        </NextButton>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
