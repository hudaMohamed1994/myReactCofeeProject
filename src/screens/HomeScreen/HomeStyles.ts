import {StyleSheet} from 'react-native';
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
  catogryText: {
    fontSize: 15,
    marginStart :2 ,
    marginEnd: 20,
    marginTop : 20 ,
    marginBottom : 20 ,
    color: colors.lightGray,
  },
  inputContainer: {
    height : 40 ,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  catagoryContainer: {
    flexDirection: 'row', // Ensure the FlatList items are arranged horizontally
    backgroundColor: 'lightgray',
  },
  parentStyle: {
    flexGrow: 1,
    backgroundColor : colors.black
  },
  searchBoxstyle: {
    flex: 1,
    height: 40,
    color: 'white',
  },
});

export default HomeStyle;
