import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'sport', component: CategoryProductsComponent },
  { path: 'electronics', component: CategoryProductsComponent },
  { path: 'toys', component: CategoryProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
