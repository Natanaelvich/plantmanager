import { FlatList } from 'react-native';

import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import { EnviromentProps as IEnviromentProps } from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
`;

export const HeaderContent = styled.View`
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${colors.heading};
`;

export const FlatListContainer = styled.View``;

export const ListItem = styled(
  FlatList as new () => FlatList<IEnviromentProps>,
).attrs({
  contentContainerStyle: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
})``;
