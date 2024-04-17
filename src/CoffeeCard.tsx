import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import colors from './assets/colors';

interface CoffeeParameters {
  index: number;
  name: string;
  price: string;
  details: string;
}

const CoffeeCard: React.FC<CoffeeParameters> = ({
  index,
  name,
  price,
  details,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    marginEnd : 20 ,
    padding: 10,
    borderWidth: 1,
    borderRadius: 23,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  text: {
    color: colors.lightGray,
    fontSize: 15,
  },
  imageStyle: {
    width: 130,
    height: 130,
  },
});

export default CoffeeCard;
