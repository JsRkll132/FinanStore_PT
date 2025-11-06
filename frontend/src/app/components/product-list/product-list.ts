import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  alertInvalid = false;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.api.getProducts().subscribe(data => {
      this.productos = data;
    });
  }

  addProducto(form: NgForm): void {
    this.alertInvalid = false;

    // Validación manual además de la validación del formulario
    if (!this.newProducto.name.trim() || this.newProducto.price <= 0) {
      this.alertInvalid = true;
      return;
    }

    // También puedes revisar form.valid si quieres que el form controle
    if (form.invalid) {
      this.alertInvalid = true;
      return;
    }

    this.api.addProduct(this.newProducto).subscribe(created => {
      this.productos.push(created);
      this.newProducto = { name: '', price: 0 };
      form.resetForm(); // limpia el form
    });
  }
}