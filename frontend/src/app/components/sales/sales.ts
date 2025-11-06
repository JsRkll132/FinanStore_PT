import { Component } from '@angular/core';
import { SaleForm } from "../sale-form/sale-form";

@Component({
  selector: 'app-sales',
  imports: [  SaleForm],
  templateUrl: './sales.html',
  styleUrl: './sales.css',
})
export class Sales {

}
