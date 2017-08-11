import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    alert('Buy');
  }
}
