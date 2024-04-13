import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import CartItemScreen from '../screens/CartItemScreen';
import HistoryScreen from '../screens/HistoryScreen';
import colors from '../assets/colors';
import SvgUri from 'react-native-svg-uri';
const homePath = require('../assets/images/home.svg'); 
const heartPath = require('../assets/images/heart.svg'); 
const notificationPath = require('../assets/images/notification.svg'); 
const lockPath = require('../assets/images/lock.svg'); 


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
              width={24}
              height={24}
              source={homePath}
            />
          ),
        }}
      />
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen}
      options={{
        tabBarIcon: ({focused ,color, size}) => (
          <SvgUri
            fill = {focused ? colors.warning: colors.dark}
            width={24}
            height={24}
            source={heartPath}
          />
        ),
      }}/>
      <Tab.Screen name="cartItemScreen" component={CartItemScreen}
      options={{
        tabBarIcon: ({focused ,color, size}) => (
          <SvgUri
            fill = {focused ? colors.warning: colors.dark}
            width={24}
            height={24}
            source={lockPath}
          />
        ),
      }}/>
      <Tab.Screen name="HistoryScreen" component={HistoryScreen}
      options={{
        tabBarIcon: ({focused ,color, size}) => (
          <SvgUri
            fill = {focused ? colors.warning: colors.dark}
            width={24}
            height={24}
            source={notificationPath}
          />
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default MyTabNavigation;
