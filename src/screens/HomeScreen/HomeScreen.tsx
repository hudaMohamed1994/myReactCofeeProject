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
import CoffeeCard from '../../CoffeeCard';
import Category from '../data/Category';

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

const HomeScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const CoffeeList: Category[] = useStore((state: any) => state.coffeeList);
  const [currentCofeeList, setCurrentCofee] = useState<Category[]>(CoffeeList);
  const BeansList = useStore((state: any) => state.beansData);
  const categoryList = getCategoryNames(CoffeeList);
  const handleSearch = () => {
    console.log('search text ', searchText);
    setCurrentCofee(getDataByCategory(searchText, CoffeeList));
  };

  const handleCategrorySearch = (category: string) => {
    setCurrentCofee(getDataByCategory(category, CoffeeList));
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
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
            <CoffeeCard
              image={item.imagelink_square}
              index={item.index}
              name={item.name}
              price={item.prices[0].price}
                details={item.special_ingredient}></CoffeeCard>
              </TouchableOpacity>
          )}
        />
        <Text style={HomeStyle.titleStyle}>
          Beanes coffee
        </Text>
        <FlatList
          data={BeansList}
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
