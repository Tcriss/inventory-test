import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/cards.model';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Product } from 'src/app/models/product.model';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  products:Product[] = [];
  inventoryValue:number = 0;
  cards: Card[] = [
    {
      icon: 'tuiIconPackageLarge',
      count: 0,
      view: 'Total Items'
    },
    {
      icon: 'tuiIconListLarge',
      count: 0,
      view: 'Products Categories'
    },
    {
      icon: 'tuiIconPackageLarge',
      count: 0,
      view: 'Example'
    }
  ]
  card = {
    icon: 'tuiIconPackageLarge',
    count: 0,
    view: 'Inventory Value'
  }

  constructor(
    private data: ConnectionService,
    private alerts: AlertsService
  ){}

  ngOnInit(): void {
    this.productsDetails();
  }

  productsDetails(){
    this.data.showProducts().subscribe({
      next: (res)=>{
        this.products = res;
      },
      error:(err)=> this.alerts.showAlert('Error',err),
      complete: ()=> {
        this.products.forEach(product => {
          this.inventoryValue += product.price; 
        });
        this.cards[0].count = this.products.length;
        this.card.count = this.inventoryValue;
      }
    });
  }
}
