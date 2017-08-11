import { Categories } from '../../categories.enum';


export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Categories;
  ingredients: Array<string>;
  equivalents: Array<string>;
}
