import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Product } from 'src/app/services/connection/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products:Product[] = [];

  constructor(private data:ConnectionService){}

  ngOnInit(): void {
    this.data.showProducts().subscribe(result => this.products.push(result));
  }
}
