import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../../service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private readonly productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
    })
  }
}
