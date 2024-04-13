import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../assets/colors';

const HomeScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.titleStyle}>Find the best coffee for you</Text>
      <TextInput
        style={styles.searchBoxstyle}
        placeholder=" find your coffee ..."
        placeholderTextColor = {colors.warning}
        
      >
      
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 20,
    marginEnd: 100,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  parentStyle: {
    flex: 1,
    backgroundColor: colors.black,
  },
  searchBoxstyle: {
    padding : 10 ,
    height: 45,
    color: 'white', 
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.light,
    backgroundColor: colors.black,
  },
});

export default HomeScreen;
