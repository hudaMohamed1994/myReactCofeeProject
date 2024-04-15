interface Category {
    id: string;
    name: string;
    description: string;
    roasted: string;
    imagelink_square: string;
    imagelink_portrait: string;
    ingredients: string;
    special_ingredient: string;
    prices: Array<{size: string; price: string; currency: string}>;
    average_rating: number;
    ratings_count: String;
    favourite: false;
    type: string;
    index: number;
  }