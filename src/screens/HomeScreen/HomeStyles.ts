import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const HomeStyle = StyleSheet.create({
  titleStyle: {
    marginTop: 20,
    marginStart: 20,
    marginEnd: 100,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  parentStyle: {
    flex: 1,
    backgroundColor: colors.black,
  },
  searchBoxstyle: {
    flex: 1,
    height: 40,
    color: 'white',
  },
});

export default HomeStyle;
