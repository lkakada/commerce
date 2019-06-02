import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service';
import { Product } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  updatedProduct = new Product();
  errors: String[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.route.paramMap
      .pipe(
        map(params => params.get('product_id')),
        switchMap(id => this.productService.showProduct(id))
      )
      .subscribe(product => {
        this.updatedProduct = product;
      })
  }
  onSubmit(event:Event) {
    event.preventDefault();
    this.productService.updateProduct(this.updatedProduct._id, this.updatedProduct)
      .subscribe(updatedProduct => {
        console.log("Updated Product", updatedProduct);
        this.router.navigateByUrl('/products');
      },
        error => {
          this.handleErrors(error.error);
      })
  }

  resetProduct() {
    this.getProduct();
  }
  private handleErrors(errors: string[] | string) {
    this.errors = Array.isArray(errors) ? errors : [errors];
  }
}
