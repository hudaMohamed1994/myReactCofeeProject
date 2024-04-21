import {create} from 'zustand';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';
import Category from '../screens/data/Category';

export const useStore = create(
  persist(
    (set, get) => ({
      coffeeList: CoffeeData,
      beansData: BeansData,
      FavouriteList: [],
      coffeePrice: 0,
      CartList: [],
      HistoryList: [],
      addToCart: (cartItem: Category) =>
        set(
          produce(state => {
            let found = false;
            console.log('store card', cartItem)
            if (state.CartList.size > 0) {
              state.CartList.forEach((item: Category) => {
                if (item.id == cartItem.id) {
                  found = true;
                  let size = false 
                  item.prices.forEach((prices: any) => {
                    if (prices.size === cartItem.prices[0].size) {
                      size = true;
                    }
                    return
                  }   
                  )
                  if (size == false) {
                    item.prices.push(cartItem.prices[0])
                    return
                  }
                }
              });
              if (found == false) {
                state.CartList.push(cartItem);
              }
            }
            else {
              state.CartList.push(cartItem);
            }
          }),
        ),
    }),
    {name: 'coffeeStore', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
