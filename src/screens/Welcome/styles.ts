import styled from 'styled-components';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Text from '../../components/Text';
import colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled(Text).attrs({
  heading: true,
})`
  font-size: 28px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  line-height: 34px;
`;

export const WelcomeImage = styled(Image).attrs({
  resizeMode: 'contain',
})`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Subtitle = styled(Text)`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
`;

export const NextButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 20px;
  width: 56px;
  height: 56px;
`;

export const NextButtonIcon = styled(Feather).attrs({
  name: 'chevron-right',
})`
  color: ${colors.white};
  font-size: 32px;
`;
