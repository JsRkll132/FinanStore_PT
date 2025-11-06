import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id?: number;
  name: string;
  price: number;
}

export interface Sale {
  id?: number;
  date?: string;
  products: Product[];
  totalAmount?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    private baseUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.baseUrl}/products`);
    }

    addProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(`${this.baseUrl}/products`, product);
    }

    getSales(): Observable<Sale[]> {
      return this.http.get<Sale[]>(`${this.baseUrl}/sales`);
    }

    addSale(productIds: number[]): Observable<Sale> {
      return this.http.post<Sale>(`${this.baseUrl}/sales`, productIds);
    }
}
