import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import CartItemScreen from '../screens/CartItemScreen';
import HistoryScreen from '../screens/HistoryScreen';
import colors from '../assets/colors';
import CustomIcon from '../assets/CustomIcon';
const Tab = createBottomTabNavigator();

const MyTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomIcon
            name= "home"
            size={25}
            color={
              focused ? colors.primary : colors.secondary
            }
          />
          ),
        }}
      />
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                name={"like"}
                size={25}
                color={focused ? colors.primary : colors.secondary}
              />
            )
          }
        }
      />
      <Tab.Screen name="CartItemScreen" component={CartItemScreen}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                name={"home"}
                size={25}
                color={focused ? colors.primary : colors.secondary}
              />
           )
         }
       }
     />
      <Tab.Screen name="HistoryScreen" component={HistoryScreen}
      options={
        {
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name={"bell"}
              size={25}
              color={focused ? colors.primary : colors.secondary}
            />
         )
       }
     }/>
    </Tab.Navigator>
  );
};

export default MyTabNavigation;
