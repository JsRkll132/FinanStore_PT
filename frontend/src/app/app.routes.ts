import { Routes } from '@angular/router';
import { Sales } from './components/sales/sales';
import { Products } from './components/products/products';

export const routes: Routes = [
    {path:'products',component : Products},
    {path:'sales',component : Sales}
];
