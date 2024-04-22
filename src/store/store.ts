import {create} from 'zustand';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';
import Category from '../screens/data/Category';

export const useStore = create(
  //persist(
    (set, get) => ({
      coffeeList: CoffeeData,
      beansData: BeansData,
      FavouriteList: [],
      coffeePrice: 0,
      CartList: [] , 
      HistoryList: [],
      addToCart: (cartItem: any) =>
        set(
          produce(state => {
            console.log ( "cartList" , state.CartList)
            let found = false;
            if (state.CartList.length > 0) {
              state.CartList.forEach((item: any) => {
                if (item.id === cartItem.id) {
                  found = true;
                  let size = false 
                  item.prices.forEach((prices: any) => {
                    if (prices.size === cartItem.prices[0].size) {
                      size = true;
                      prices.quantity++;
                      console.log ("item after add prices." , item)
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
    calcualtePrices: () => {
      set(
        produce(state => {
          let total = 0;
          state.CartList.forEach((item: any) => {
            item.prices.forEach((prices: any) => {
              total = total + parseFloat(prices.price);
            });
          });
          state.coffeePrice = total;
        }),
      )
      }
    
    }),
  //  {name: 'coffeeStoreUpdate', storage: createJSONStorage(() => AsyncStorage)},
  //),
);
