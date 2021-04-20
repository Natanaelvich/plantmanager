import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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

    color: '#52665A',
    maxWidth: 222,
  },
  image: {
    marginTop: 12,
  },
  description: {
    marginTop: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 25,

    textAlign: 'center',
    color: '#5C6660',
    maxWidth: 288,
  },
  buttonNext: {
    marginTop: 'auto',
    backgroundColor: '#32B768',
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
