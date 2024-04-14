import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import {useStore} from '../store/store';

const onBlurTextInput = () => {
  Keyboard.dismiss(); // Dismiss the keyboard when TextInput loses focus
};

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.coffeeList);
  const BeansList = useStore((state: any) => state.beansData);

  return (
    <View style={styles.parentStyle}>
      <Text style={styles.titleStyle}>Find the best{'\n'}coffee for you</Text>
      <TextInput
        style={styles.searchBoxstyle}
        onBlur={onBlurTextInput}
        placeholder=" find your coffee ..."
        placeholderTextColor={colors.warning}
        keyboardType="default"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 20,
    marginStart: 20,
    marginEnd: 100,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  parentStyle: {
    flex: 1,
    backgroundColor: colors.black,
  },
  searchBoxstyle: {
    marginStart: 10,
    padding: 10,
    height: 45,
    color: 'white',
    width: '95%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.light,
    backgroundColor: colors.black,
  },
});

export default HomeScreen;
