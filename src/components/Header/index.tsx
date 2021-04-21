import React from 'react';

import { Container, Content, Greeting, UserName, Avatar } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <UserName>Natanael</UserName>
      </Content>

      <Avatar source={{ uri: 'https://github.com/Natanaelvich.png' }} />
    </Container>
  );
};

export default Header;
