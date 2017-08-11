import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { PRODUCTS } from './products.mock';


@Injectable()
export class ProductsService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
}
