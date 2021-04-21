import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles';

const Confirmation: React.FC = () => {
  const { navigate } = useNavigation();

  function handleMoveOn(): void {
    navigate('PlantSelect');
  }
  return (
    <Container>
      <Content>
        <Emoji>😁</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Subtitle>

        <Footer>
          <Button title="Começar" onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
