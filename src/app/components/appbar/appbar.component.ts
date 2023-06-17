import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { addProduct } from 'src/app/services/connection/data';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent {
  value=''
  open:boolean = false;
  productForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private back:ConnectionService,
    private alert:AlertsService,
  ){
    this.productForm = this.fb.group({
      name: ['',[Validators.required,Validators.maxLength(50)]],
      description: ['',[Validators.required,Validators.maxLength(100)]],
      category: ['',Validators.required],
      stock: [ ,Validators.required],
      price: [ ,[Validators.required,Validators.pattern("^[0-9]*$")]]
    });
  }

  showDialog(): void {
      this.open = true;
  }

  add(){
    let data:addProduct = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      category: this.productForm.value.category,
      stock: this.productForm.value.stock,
      price: this.productForm.value.price
    }
    this.back.addProduct(data).subscribe({
      next: (res) => {
        this.alert.showAlert('Product Added', 'Your product was added succesfully');
        this.open = false;
      },
      error: (err)=> this.alert.showAlert('Product Not Added', 'Check the campus to see the error')
    });
    this.productForm.reset();   
  }
}
