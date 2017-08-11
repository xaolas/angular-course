import { Component, Input, OnInit } from '@angular/core';

import { Product } from './shared/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
    console.log(this.products);

  }
}
