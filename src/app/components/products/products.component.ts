import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Product } from 'src/app/models/product.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EditProduct } from 'src/app/models/editProduct.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  open: boolean = false;
  products: Product[] = [];
  updateForm: FormGroup;
  editProduct = {};

  constructor(
    private data: ConnectionService,
    private alert: AlertsService,
    private fb: FormBuilder
  ){
    this.updateForm = this.fb.group({
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

  showDialog(id: number) {
    this.open = true;
    let ID = id;

    this.data.getProductById(ID).subscribe(r => {
      this.editProduct = {
        name: r.name,
        description: r.description,
        category: r.category,
        price: r.price
      };
      this.updateForm.setValue(this.editProduct);
    });
  }

  edit(id: number){

    let updatedForm: EditProduct = {
      name: this.updateForm.value.name,
      description: this.updateForm.value.description,
      category: this.updateForm.value.category,
      price: this.updateForm.value.price
    };

    this.data.editProduct(id, updatedForm).subscribe({
      next: (res) => {
        this.alert.showAlert('Product edited', 'Your product was edited succesfully');
        this.open = false;
      },
      error: (err)=> this.alert.showAlert('Product was not edited', err),
      complete: () => {
        this.updateForm.reset();
        this.show();
      }
    });
  }

  delete(id: number){
    this.data.deleteProduct(id).subscribe({
      next: (res) => {
        this.alert.showAlert('Product deleted', 'Your product was deleted succesfully');
        this.open = false;
      },
      error: (err)=> this.alert.showAlert('Product was not deleted', err),
      complete: () => this.show()
    });
  }
}
