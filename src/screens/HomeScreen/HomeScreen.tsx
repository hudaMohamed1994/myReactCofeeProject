import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  StatusBar,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import colors from '../../assets/colors';
import {useStore} from '../../store/store';
import CustomIcon from '../../assets/CustomIcon';
import HomeStyle from './HomeStyles';
import constants from '../../utils/constants';
import CoffeeCard from '../../CoffeeCard';
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

function getDataByCategory(category: string, CoffeeData: Category[]) {
  switch (true) {
    case category == constants.LatteCategory:
      return CoffeeData.filter(item => item.name == constants.LatteCategory);
      break;
    case category == constants.Macchiato:
      return CoffeeData.filter(item => item.name == constants.Macchiato);
      break;
    case category == constants.Espresso:
      return CoffeeData.filter(item => item.name == constants.Espresso);
      break;
    case category == constants.Cappucchino:
      return CoffeeData.filter(item => item.name == constants.Cappucchino);
      break;
    default:
      return CoffeeData;
  }
}

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [currentCofeeList, setCurrentCofee] = useState<Category[]>([]);

  const CoffeeList: Category[] = useStore((state: any) => state.coffeeList);
  const BeansList = useStore((state: any) => state.beansData);
  const categoryList = getCategoryNames(CoffeeList);
  const handleSearch = () => {
    setCurrentCofee(getDataByCategory(searchText, CoffeeList));
    console.log(setCurrentCofee(getDataByCategory(searchText, CoffeeList)));
  };

  return (
    <View style={HomeStyle.parentStyle}>
      <StatusBar backgroundColor={colors.black} />
      <Text style={HomeStyle.titleStyle}>
        Find the best{'\n'}coffee for you
      </Text>
      <View style={HomeStyle.inputContainer}>
        <CustomIcon name="search" size={20} color={colors.light} />
        <TextInput
          onSubmitEditing={handleSearch}
          onChangeText={text => setSearchText(text)}
          style={HomeStyle.searchBoxstyle}
          placeholder=" find your coffee ..."
          placeholderTextColor={colors.lightGray}
          keyboardType="default"></TextInput>
      </View>
      <FlatList
        data={categoryList}
        horizontal
        renderItem={({item}) => (
          <View>
            <Text style={HomeStyle.catogryText}>{item}</Text>
          </View>
        )}
      />
      <FlatList
        data={currentCofeeList}
        horizontal
        renderItem={({item}) => (
          <CoffeeCard
            index={item.index}
            name={item.name}
            price={item.prices[0].price}
            details={item.special_ingredient}></CoffeeCard>
        )}
      />
       <FlatList
        data={currentCofeeList}
        horizontal
        renderItem={({item}) => (
          <CoffeeCard
            index={item.index}
            name={item.name}
            price={item.prices[0].price}
            details={item.special_ingredient}></CoffeeCard>
        )}
      />
    </View>
  );
};

export default HomeScreen;
