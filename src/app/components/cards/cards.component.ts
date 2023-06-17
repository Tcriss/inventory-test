import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Product } from 'src/app/services/connection/data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  products:Product[] = [];
  inventoryValue:number = 0;
  cards:Card[] = [
    {
      icon: 'tuiIconPackageLarge',
      count: 25,
      view: 'Total Items'
    },
    {
      icon: 'tuiIconListLarge',
      count: 25,
      view: 'Products Categories'
    },
    {
      icon: 'tuiIconPackageLarge',
      count: this.inventoryValue,
      view: 'Inventory Value'
    },
    {
      icon: 'tuiIconPackageLarge',
      count: 0,
      view: 'Example'
    }
  ]

  constructor(private data:ConnectionService){}

  ngOnInit(): void {
    this.productsDetails();
  }

  productsDetails(){
    this.data.showProducts().subscribe(res => {
      this.products = res;
      console.log(res);
    });
    this.products.forEach(product =>{
      this.inventoryValue = product.price; 
      console.log(product);
    });
    console.log(this.products);
  }
}
