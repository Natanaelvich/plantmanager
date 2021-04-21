import styled from 'styled-components';
import {
  SafeAreaView,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Text from '../../components/Text';
import colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardAvoiding = styled(KeyboardAvoidingView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled(View)`
  flex: 1;
  width: 100%;
`;

export const Header = styled(View)`
  width: 100%;
`;

export const Emoji = styled(Text)`
  font-size: 44px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled(Text).attrs({
  heading: true,
})`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
`;

export const Form = styled(View)`
  flex: 1;
  padding: 0 54px;
  align-items: center;
  justify-content: center;
`;

export const NameInput = styled(TextInput)<{
  isFocused: boolean;
  isFilled: boolean;
}>`
  border-bottom-width: 1px;
  border-color: ${({ isFocused, isFilled }) =>
    isFocused || isFilled ? colors.green : colors.gray};
  color: ${colors.heading};
  width: 100%;
  padding: 10px;
  margin-top: 50px;
  text-align: center;
`;

export const Footer = styled(View)`
  margin-top: 30px;
`;
