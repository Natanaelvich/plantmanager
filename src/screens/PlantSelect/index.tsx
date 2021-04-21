import React, { useEffect, useState } from 'react';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import api from '../../services/api';
import {
  Container,
  HeaderContent,
  Title,
  Subtitle,
  FlatListContainer,
  ListItem,
} from './styles';

export interface EnviromentProps {
  key: string;
  title: string;
}

const PlantSelect: React.FC = () => {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);

  useEffect(() => {
    async function fetchEnviroment(): Promise<void> {
      const { data } = await api.get('plants_environments');
      setEnviroments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);
  return (
    <Container>
      <HeaderContent>
        <Header />

        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </HeaderContent>

      <FlatListContainer>
        <ListItem
          data={enviroments}
          renderItem={({ item }) => <EnviromentButton title={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </FlatListContainer>
    </Container>
  );
};

export default PlantSelect;
