import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ImageProps,
  TouchableOpacity,
} from 'react-native';
import colors from './assets/colors';
import CustomIcon from './assets/CustomIcon';
import Category from './screens/data/Category';

interface CoffeeParameters {
  category: Category;
  clickHandler: any;
}
const CoffeeCard: React.FC<CoffeeParameters> = ({category, clickHandler}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={category.imagelink_square}
        style={styles.CardImageBG}
        resizeMode="cover"></ImageBackground>
      <Text style={styles.text}>{category.name}</Text>
      <Text style={styles.text}>{category.roasted}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{category.prices[0].price + '$'}</Text>
        <TouchableOpacity
          onPress={() => {
            clickHandler(category);
          }}>
          <View style={styles.ImageStyle}>
            <CustomIcon name="add" size={8} color={colors.light} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 23,
    borderColor: '#ddd',
    backgroundColor: colors.black,
  },
  text: {
    padding: 5,
    color: 'white',
    fontSize: 15,
  },
  priceText: {
    color: 'white',
    fontSize: 15,
  },
  ImageStyle: {
    borderRadius: 5,
    marginEnd: 5,
    padding: 10,
    backgroundColor: colors.warning,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    width: 130,
    height: 130,
  },
  CardImageBG: {
    width: 150,
    height: 150,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
  },
});

export default CoffeeCard;
