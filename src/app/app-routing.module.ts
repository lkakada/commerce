import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: '', component: ProductsComponent,
    children: [
      { path: 'products', component: ProductListComponent },
      { path: 'products/new', component: ProductNewComponent },
      { path: 'products/:product_id', component: ProductDetailComponent },
      { path: 'products/:product_id/edit', component: ProductUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
