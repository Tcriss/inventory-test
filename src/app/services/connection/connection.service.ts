import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AddProduct } from 'src/app/models/addProduct.model';
import { EditProduct } from 'src/app/models/editProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url:string;

  constructor(private http:HttpClient) {
    this.url = 'https://localhost:7051/';
  }

  showProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url+'ProductAll');
  }

  getProductById( id: number ): Observable<Product> {
    return this.http.get<Product>(this.url+'ProductId?id='+id);
  }

  getProductByName( name: string ): Observable<Product> {
    return this.http.get<Product>(this.url+'ProductName?name='+name);
  }

  addProduct( product: AddProduct ): Observable<Product> {
    return this.http.post<Product>(this.url+'Product', product);
  }

  editStocks( id:number, stock:number ): Observable<Product> {
    return this.http.put<Product>(this.url+'ProductStock?id='+id+'&newStock='+stock, stock);
  }

  editProduct( id:number, product: EditProduct ): Observable<string> {
    return this.http.put<string>(this.url+'Product?id='+id, product);
  }

  deleteProduct(id: number): Observable<string> {
    return this.http.delete<string>(this.url+'ProductId?id='+id);
  }
}