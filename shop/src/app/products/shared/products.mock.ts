import { Product } from './product.model';
import { Categories } from './categories.enum';


export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Jdjdjdjldl',
    description: 'dkkdkdkd kdkq wkdkqw dkqwk dkwqk dfkqwk fkqwkf kqw fwqkkkk wqfkkfkfkf',
    price: 100,
    category: Categories.Up,
    isAvailable: true,
    ingredients: [
      'Toys',
      'Phones',
      'TV',
    ],
    equivalents: [
      'Car',
      'Bus',
      'Plane',
    ],
  },
  {
    id: 1,
    name: 'Product 2',
    description: 'dkkdkdkd kdkq wkdkqw dkqwk dkwqk dfkqwk fkqwkf kqw fwqkkkk wqfkkfkfkf',
    price: 100,
    category: Categories.Down,
    isAvailable: true,
    ingredients: [
      'Toys',
      'Phones',
      'TV',
    ],
    equivalents: [
      'Car',
      'Bus',
      'Plane',
    ],
  },
];
