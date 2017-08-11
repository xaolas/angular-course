import {Component} from '@angular/core';

const Categories = {
  Up: 'Up',
  Down: 'Down',
  Left: 'Left',
  Right: 'Right',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ddd';
  description = 'dddd';
  price = 100;
  category = Categories.Up;
  isAvailable = true;
  ingredients = [
    'Toys',
    'Phones',
    'TV',
  ];
  equivalents = [
    'Car',
    'Bus',
    'Plane',
  ];

  onBuy() {
    alert('Buy');
  }
}
