import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {useStore} from '../../store/store';
import CustomIcon from '../../assets/CustomIcon';
import HomeStyles from './HomeStyles'
import HomeStyle from './HomeStyles';
const handlePressOutside = () => {
  Keyboard.dismiss(); // Dismiss the keyboard when TextInput loses focus
};

function getCategoryNames(categoriesData: Category[]) {
  const uniqueCategoryNamesSet: Set<string> = new Set(
    categoriesData.map(category => category.name),
  );
  const catagoriesArray = Array.from(uniqueCategoryNamesSet);
  catagoriesArray.unshift('All');
  return catagoriesArray;
}

const HomeScreen = () => {
  const CoffeeList: Category[] = useStore((state: any) => state.coffeeList);
  const BeansList = useStore((state: any) => state.beansData);
  const categoryList = getCategoryNames(CoffeeList);
  console.log(categoryList);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={HomeStyle.parentStyle}
      onPress={handlePressOutside}>
      <View>
        <StatusBar backgroundColor={colors.black} />
        <Text style={HomeStyle.titleStyle}>Find the best{'\n'}coffee for you</Text>
        <View style={HomeStyle.inputContainer}>
          <CustomIcon name="search" size={20} color={colors.light} />
          <TextInput
            style={HomeStyle.searchBoxstyle}
            placeholder=" find your coffee ..."
            placeholderTextColor={colors.warning}
            keyboardType="default"></TextInput>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreen;
