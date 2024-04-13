import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import CartItemScreen from '../screens/CartItemScreen';
import HistoryScreen from '../screens/HistoryScreen';
import colors from '../assets/colors';
import SvgUri from 'react-native-svg-uri';


const imagePath = require('../assets/images/home.svg'); 

const Tab = createBottomTabNavigator();

const MyTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused ,color, size}) => (
            <SvgUri
              fill = {focused ? colors.warning: colors.dark}
              width={10}
              height={10}
              source={imagePath}
            />
          ),
        }}
      />
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen}
      options={{
        tabBarIcon: ({focused ,color, size}) => (
          <SvgUri
            fill = {focused ? colors.warning: colors.dark}
            width={40}
            height={40}
            source={imagePath}
          />
        ),
      }}/>
      <Tab.Screen name="cartItemScreen" component={CartItemScreen}
      options={{
        tabBarIcon: ({focused ,color, size}) => (
          <SvgUri
            fill = {focused ? colors.warning: colors.dark}
            width={size}
            height={size}
            source={imagePath}
          />
        ),
      }}/>
      <Tab.Screen name="HistoryScreen" component={HistoryScreen}
      options={{
        tabBarIcon: ({focused ,color, size}) => (
          <SvgUri
            fill = {focused ? colors.warning: colors.dark}
            width={size}
            height={size}
            source={imagePath}
          />
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default MyTabNavigation;
