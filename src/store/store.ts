import {create} from 'zustand';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create(
  persist(
    (get, set) => ({
      coffeeList: CoffeeData,
      beansData: BeansData,
      FaavouriteList: [],
      coffeePrice: 0,
      HistoryList: [],
    }),
    {name: 'coffeeStore', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
