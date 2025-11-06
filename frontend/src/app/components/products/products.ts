import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-products',
  imports: [RouterOutlet, ProductList],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

}
