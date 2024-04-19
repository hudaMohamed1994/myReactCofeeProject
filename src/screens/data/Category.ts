import { ImageProps } from 'react-native';

export default interface Category {
    id: string;
    name: string;
    description: string;
    roasted: string;
    imagelink_square: ImageProps;
    imagelink_portrait: ImageProps;
    ingredients: string;
    special_ingredient: string;
    prices: Array<{size: string; price: string; currency: string}>;
    average_rating: number;
    ratings_count: String;
    favourite: false;
    type: string;
    index: number;
  }