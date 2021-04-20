import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 38,

    textAlign: 'center',

    color: colors.heading,
    maxWidth: 222,
  },
  image: {
    marginTop: 12,
    width: 292,
    height: 284,
  },
  description: {
    marginTop: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 25,

    textAlign: 'center',
    color: colors.heading,
    maxWidth: 288,
  },
  buttonNext: {
    marginTop: 'auto',
    backgroundColor: colors.green,
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
