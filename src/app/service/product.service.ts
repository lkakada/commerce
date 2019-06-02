import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Observer } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly base = 'api/product';

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.base);
  }
  postProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.base, product);
  }
  showProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.base}/${id}`);
  }
  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${id}`);
  }
  updateProduct(id: string, product:Product): Observable<Product> {
    return this.http.put<Product>(`${this.base}/${id}`, product)
  }
}
