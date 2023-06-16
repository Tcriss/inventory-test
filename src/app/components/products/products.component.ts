import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Product, Product2 } from 'src/app/services/connection/data';
import { FormGroup, FormBuilder } from '@angular/forms';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products:Product[] = [];
  updateForm: FormGroup;

  constructor(
    private data:ConnectionService,
    private alert:AlertsService,
    private fb:FormBuilder
  ){
    this.updateForm = this.fb.group({
      id: [],
      name: [''],
      description: [''],
      category: [''],
      price: ['']
    })
  }

  ngOnInit(): void {
    this.show();
  }

  show(){
    this.data.showProducts().subscribe(result => this.products = result);
  }

  edit(id:number){
    let update:Product2 = {
      id: this.updateForm.value.id,
      name: this.updateForm.value.name,
      description: this.updateForm.value.description,
      category: this.updateForm.value.category,
      price: this.updateForm.value.price
    }
    this.data.editProduct(id, update).subscribe(res =>{
      this.alert.showAlert('Product updated', res);
      this.show();
      this.open = false;
    })
    this.updateForm.reset();
  }

  delete(id:number){
    this.data.deleteProduct(id).subscribe(res=>{
      this.alert.showAlert('Product deleted', res);
      this.show();
    });
  }

  open:boolean = false;

  showDialog(): void {
    this.open = true;
  }
}
