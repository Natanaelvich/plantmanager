import React, { useEffect, useState } from 'react';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import Load from '../../components/Load';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import api from '../../services/api';
import {
  Container,
  HeaderContent,
  Title,
  Subtitle,
  FlatListContainer,
  ListItem,
  FlatListContainerPlants,
  ListPlants,
} from './styles';

export interface EnviromentProps {
  key: string;
  title: string;
}

export interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

const PlantSelect: React.FC = () => {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEnviroment(): Promise<void> {
      const { data } = await api.get(
        'plants_environments?_sort=title&_order=asc',
      );
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

  useEffect(() => {
    async function fetchPlants(): Promise<void> {
      const { data } = await api.get('plants?_sort=name&_order=asc');
      setPlants(data);
      setFilteredPlants(data);
      setLoading(false);
    }

    fetchPlants();
  }, []);

  function handleEnvironmentSelected(key: string): void {
    setEnvironmentSelected(key);

    if (key === 'all') return setFilteredPlants(plants);

    const filtered = plants.filter(plant => plant.environments.includes(key));
    setFilteredPlants(filtered);
  }

  if (loading) return <Load />;

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
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </FlatListContainer>

      <FlatListContainerPlants>
        <ListPlants
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </FlatListContainerPlants>
    </Container>
  );
};

export default PlantSelect;
