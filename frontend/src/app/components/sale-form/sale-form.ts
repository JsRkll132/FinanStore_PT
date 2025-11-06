import { Component, OnInit } from '@angular/core';
import { ApiService, Product, Sale } from '../../services/api-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sale-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './sale-form.html',
  styleUrl: './sale-form.css',
})
export class SaleForm implements OnInit {
  productos: Product[] = [];
  ventas: Sale[] = [];
  selectedProductIds = new Set<number>();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadSales();
  }

  loadProducts(): void {
    this.api.getProducts().subscribe(data => this.productos = data);
  }

  loadSales(): void {
    this.api.getSales().subscribe(data => this.ventas = data);
  }

  toggleSelection(producto: Product): void {
    if (producto.id == null) return;

    if (this.selectedProductIds.has(producto.id)) {
      this.selectedProductIds.delete(producto.id);
    } else {
      this.selectedProductIds.add(producto.id);
    }
  }

  registrarVenta(): void {
    // Extraer los IDs seleccionados como array
      const idsArray: number[] = [];
          this.selectedProductIds.forEach(id => {
            idsArray.push(id);
          });
    if (idsArray.length === 0) {
      alert('Selecciona al menos un producto para registrar la venta.');
      return;
    }
    
    // Usar el servicio con sólo los IDs
    this.api.addSale(idsArray).subscribe(createdSale => {
      this.ventas.push(createdSale);
      this.selectedProductIds.clear();
    }, error => {
      console.error('Error al registrar la venta', error);
      alert('Hubo un error al registrar la venta.');
    });
  }
}
