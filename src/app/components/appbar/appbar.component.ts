import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Product } from 'src/app/services/connection/data';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent {
  value = '';
  productForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private back:ConnectionService,
    private alert:AlertsService,
  ){
    this.productForm = this.fb.group({
      id: [],
      name: [''],
      description: [''],
      category: [''],
      stock: [],
      price: []
    });
  }

  open:boolean = false;

  showDialog(): void {
      this.open = true;
  }

  add(){
    let data:Product = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      category: this.productForm.value.category,
      stock: this.productForm.value.stock,
      price: this.productForm.value.price
    }
    this.back.addProduct(data).subscribe(res =>{
      this.alert.showAlert('Product Added', 'Your product was added succesfully');
      this.open = false;
    }); 
    this.productForm.reset();   
  }
}
