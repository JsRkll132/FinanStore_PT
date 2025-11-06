import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ApiService, Product } from '../../services/api-service';
@Component({
  selector: 'app-product-list',
  imports:  [ CommonModule,FormsModule ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  productos: Product[] = [];
  newProducto: Product = { name: '', price: 0 };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.api.getProducts().subscribe(data => {
      this.productos = data;
    });
  }

  addProducto(): void {
    if (this.newProducto.name.trim() && this.newProducto.price > 0) {
      this.api.addProduct(this.newProducto).subscribe(created => {
        this.productos.push(created);
        this.newProducto = { name: '', price: 0 };
      });
    }
  }
}