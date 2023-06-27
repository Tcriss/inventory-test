import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  products: Product[] = [];

  constructor( private data: ConnectionService ){
    this.data.showProducts().subscribe(r => {
      this.products = r;
    })
  }
}
