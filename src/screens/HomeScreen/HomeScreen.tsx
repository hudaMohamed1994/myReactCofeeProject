import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
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
  console.log(category);
  if (category == 'All') {
    return CoffeeData;
  } else {
    return CoffeeData.filter(item => item.name == category);
  }
}

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [currentCofeeList, setCurrentCofee] = useState<Category[]>([]);

  const CoffeeList: Category[] = useStore((state: any) => state.coffeeList);
  const BeansList = useStore((state: any) => state.beansData);
  const categoryList = getCategoryNames(CoffeeList);
  const handleSearch = () => {
    console.log('search text ', searchText);
    setCurrentCofee(getDataByCategory(searchText, CoffeeList));
    console.log(CoffeeList.length);
  };

  const handleCategrorySearch = (category: string) => {
    setCurrentCofee(getDataByCategory(category, CoffeeList));
    console.log(currentCofeeList.length);
  };

  return (
    <ScrollView>
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
            <TouchableOpacity onPress={() => handleCategrorySearch(item)}>
              <View>
                <Text style={HomeStyle.catogryText}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={currentCofeeList}
          horizontal
          renderItem={({item}) => (
            <CoffeeCard
              index={item.index}
              name={item.name}
              image={item.imagelink_square}
              price={item.prices[0].price}
              details={item.special_ingredient}></CoffeeCard>
          )}
        />
        <FlatList
          data={currentCofeeList}
          horizontal
          renderItem={({item}) => (
            <CoffeeCard
              image={item.imagelink_square}
              index={item.index}
              name={item.name}
              price={item.prices[0].price}
              details={item.special_ingredient}></CoffeeCard>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
