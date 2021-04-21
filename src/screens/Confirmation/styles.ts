import styled from 'styled-components';
import { SafeAreaView, View } from 'react-native';
import Text from '../../components/Text';
import colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled(Text)`
  font-size: 78px;
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled(Text).attrs({
  heading: true,
})`
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.heading};
`;

export const Subtitle = styled(Text)`
  font-size: 17px;
  text-align: center;
  padding: 10px 0;
  color: ${colors.heading};
`;

export const Footer = styled(View)`
  width: 100%;
  padding: 0 60px;
  margin-top: 20px;
`;
