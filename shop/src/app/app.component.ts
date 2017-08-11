import { Component, OnInit } from '@angular/core';

import { Product } from './products/shared/product.model';
import { ProductsService } from './products/shared/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.products = this.productService.getProducts();
  }
}
