import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service';
import { Product } from '../../models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product = {} as Product;
  errors: String[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.productService.postProduct(this.product)
      .subscribe(newProduct => {
        console.log("New Product", newProduct);
        this.router.navigateByUrl('/products')
      },
        error => {
          this.handleErrors(error.error);
        })
    form.reset();
  }

  private handleErrors(errors: string[] | string) {
    this.errors = Array.isArray(errors) ? errors : [errors];
  }
}
