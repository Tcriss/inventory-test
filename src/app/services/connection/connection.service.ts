import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Product2, addProduct } from './data';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url:string;

  constructor(private http:HttpClient) {
    this.url = 'https://localhost:7051/';
  }

  showProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url+'ProductAll');
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+id);
  }

  getProductByName(name:string):Observable<Product>{
    return this.http.get<Product>(this.url+name);
  }

  addProduct(product:addProduct):Observable<Product>{
    return this.http.post<Product>(this.url+'Product',product);
  }

  addStock(id:number, stock:number):Observable<Product>{
    return this.http.put<Product>(this.url+'ProductStock?id=${id}&newStock=4',stock);
  }

  editProduct(id:number, product:Product2):Observable<string>{
    return this.http.put<string>(this.url+'Product?id='+id,product);
  }

  deleteProduct(id:number):Observable<string>{
    return this.http.delete<string>(this.url+'ProductId?id='+id);
  }
}