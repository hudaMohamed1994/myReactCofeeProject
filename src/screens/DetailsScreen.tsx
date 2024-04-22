import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store';
import colors from '../assets/colors';
import ImageBackgroundInfo from '../comonents/ImageBackgroundInfo';

const DetailsScreen = ({ navigation, route }) => {
  const ItemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.coffeeList : state.beansData
  )[route.params.index]

  return (
    <View  style = { styles.Container}>
      <ImageBackgroundInfo
        

        EnableBackHandler={false}
        imagelink_portrait={ItemOfIndex.imagelink_portrait}
        type={ItemOfIndex.type}
        id={ItemOfIndex.id}
        favourite={
          ItemOfIndex.favourite
        }
        name={ItemOfIndex.name}
        special_ingredient={ItemOfIndex.special_ingredient}
        ingredients={ItemOfIndex.ingredients}
        average_rating={ItemOfIndex.average_rating}
        ratings_count={ItemOfIndex.ratings_count}
        roasted={ItemOfIndex.roasted}
        ToggleFavourite={ true}
      ></ImageBackgroundInfo>
    </View>
  )
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor :colors.black
  }



})
export default DetailsScreen
