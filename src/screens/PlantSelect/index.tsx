import React from 'react';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import {
  Container,
  HeaderContent,
  Title,
  Subtitle,
  FlatListContainer,
  ListItem,
} from './styles';

const PlantSelect: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <Header />

        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </HeaderContent>

      <FlatListContainer>
        <ListItem
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => <EnviromentButton title="Cozinha" />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </FlatListContainer>
    </Container>
  );
};

export default PlantSelect;
