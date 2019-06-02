import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../../service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product= new Product();
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('product_id')),
        switchMap(id => this.productService.showProduct(id))
    )
      .subscribe(product => {
        this.product = product;
    })
  }

  deleteProduct(product:Product) {
    this.productService.deleteProduct(product._id)
      .subscribe(removedProduct => {
        console.log("Removed product", removedProduct);
        this.router.navigateByUrl('/products');
    })
  }

}
