import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import watering from '../../assets/watering.png';
import styles from './styles';

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerencie suas plantas de forma fácil</Text>
      <Image style={styles.image} source={watering} />
      <Text style={styles.description}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.buttonNext}>
        <SimpleLineIcons name="arrow-right" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
