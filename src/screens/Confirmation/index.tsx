import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

const Confirmation: React.FC = () => {
  const { navigate } = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function handleMoveOn(): void {
    navigate(nextScreen);
  }
  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <Subtitle>{subtitle}</Subtitle>

        <Footer>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
