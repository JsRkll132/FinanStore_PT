import {  Routes } from '@angular/router';
import { Sales } from './components/sales/sales';
import { Products } from './components/products/products';
export const routes: Routes = [
    { path: 'productos', component:  Products},
    { path: 'ventas', component: Sales },
    { path: '', redirectTo: '/productos', pathMatch: 'full' }
];

 