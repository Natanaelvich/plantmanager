import AsyncStorage from '@react-native-async-storage/async-storage';
import { differenceInSeconds, format } from 'date-fns';
import * as Notifications from 'expo-notifications';

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  hour: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
  dateTimeNotification: Date;
}

export interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
    notificationId: string;
  };
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const seconds = differenceInSeconds(nextTime, now);

    const { times, repeat_every } = plant.frequency;

    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    } else {
      nextTime.setDate(nextTime.getDate() + 1);
    }

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeey, 🌱',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant,
        },
      },
      trigger: {
        seconds,
        repeats: false,
      },
    });

    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId,
      },
    };

    await AsyncStorage.setItem(
      '@plantmanager:plants',
      JSON.stringify({
        ...newPlant,
        ...oldPlants,
      }),
    );
  } catch (err) {
    throw new Error(err);
  }
}

export async function loadPlant(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const plantsSorted = Object.keys(plants)
      .map(plant => {
        return {
          ...plants[plant].data,
          hour: format(
            new Date(plants[plant].data.dateTimeNotification),
            'HH:mm',
          ),
        };
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
            Math.floor(new Date(b.dateTimeNotification).getTime() / 1000),
        ),
      );

    return plantsSorted;
  } catch (err) {
    throw new Error(err);
  }
}

export async function removePlant(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@plantmanager:plants');
  const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

  await Notifications.cancelScheduledNotificationAsync(
    plants[id].notificationId,
  );
  delete plants[id];

  await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plants));
}
