import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Content, Greeting, UserName, Avatar } from './styles';

const Header: React.FC = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function loadStorageUserName(): Promise<void> {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }

    loadStorageUserName();
  }, []);

  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </Content>

      <Avatar source={{ uri: 'https://github.com/Natanaelvich.png' }} />
    </Container>
  );
};

export default Header;
