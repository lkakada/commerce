import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductUpdateComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
