import React from 'react';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/load-plant.json';

import { Container } from './styles';

const Load: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{
          backgroundColor: 'transparent',
          width: 200,
          height: 200,
        }}
      />
    </Container>
  );
};

export default Load;
