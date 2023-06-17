import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Product, Product2 } from 'src/app/services/connection/data';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  open:boolean = false;
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
    this.data.editProduct(id, update).subscribe({
      next: (res) => {
        this.alert.showAlert('Product edited', 'Your product was edited succesfully');
        this.open = false;
      },
      error: (err)=> this.alert.showAlert('Product was not edited', err)
    })
    this.updateForm.reset();
  }

  delete(id:number){
    this.data.deleteProduct(id).subscribe({
      next: (res) => {
        this.alert.showAlert('Product deleted', 'Your product was deleted succesfully');
        this.open = false;
      },
      error: (err)=> this.alert.showAlert('Product was not deleted', err)
    });
  }

  showDialog(): void {
    this.open = true;
  }
}
