import React, { useState } from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Emoji,
  Title,
  Form,
  Header,
  NameInput,
  Footer,
  KeyboardAvoiding,
} from './styles';

const UserIdentification: React.FC = () => {
  const navigation = useNavigation();

  const handleSubmit = (): void => {
    navigation.navigate('Confirmation');
  };

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [username, setUsername] = useState<string>();

  const handleInputBlur = (): void => {
    setIsFocused(false);
    setIsFilled(!!username);
  };

  const handleInputFocus = (): void => setIsFocused(true);

  const handleInputChange = (value: string): void => {
    setIsFilled(!!value);
    setUsername(value);
  };

  return (
    <Container>
      <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😁' : '😀'}</Emoji>
                <Title>Como podemos {'\n'} chamar você?</Title>
              </Header>

              <NameInput
                {...{ isFocused }}
                {...{ isFilled }}
                placeholder="Digite seu nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <Footer>
                <Button title="Confirmar" onPress={handleSubmit} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoiding>
    </Container>
  );
};

export default UserIdentification;
