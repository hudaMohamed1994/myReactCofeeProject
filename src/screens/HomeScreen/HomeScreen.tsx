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
  if (category == 'All') {
    return CoffeeData;
  } else if (category == 'Latte') {
    return CoffeeData.filter(item => item.name == 'Latte');
  }
}

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const CoffeeList: Category[] = useStore((state: any) => state.coffeeList);
  const BeansList = useStore((state: any) => state.beansData);
  const categoryList = getCategoryNames(CoffeeList);
  const handleSearch = () => {
    const data = getDataByCategory(searchText, CoffeeList);
    console.log (data , data?.length)
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
    </View>
  );
};

export default HomeScreen;
