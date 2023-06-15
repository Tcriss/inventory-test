import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Product2 } from './data';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url:string;

  constructor(private http:HttpClient) {
    this.url = 'https://localhost:7051/';
  }

  showProducts():Observable<Product>{
    return this.http.get<Product>(this.url+'ProductAll');
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+id);
  }

  getProductByName(name:string):Observable<Product>{
    return this.http.get<Product>(this.url+name);
  }

  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.url+'Product',product);
  }

  addStock(id:number, stock:number):Observable<Product>{
    return this.http.put<Product>(this.url+'ProductStock?id=${id}&newStock=4',stock);
  }

  editProduct(product:Product2):Observable<Product2>{
    return this.http.put<Product2>(this.url+'Product',product);
  }
}