import { Component, ChangeDetectionStrategy, Inject, inject } from '@angular/core';
import { FormGroup, Validator, FormBuilder } from '@angular/forms';
import { TuiAlertService } from '@taiga-ui/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Product } from 'src/app/services/connection/data';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppbarComponent {
  value = '';
  productForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private back:ConnectionService,
    private alerts:TuiAlertService 
  ){
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      category: [''],
      stock: [],
      price: []
    });
  }

  open = false;

  showDialog(): void {
      this.open = true;
  }

  add(){
    let data:Product = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      category: this.productForm.value.category,
      stock: this.productForm.value.stock,
      price: this.productForm.value.price
    }
    this.back.addProduct(data).subscribe(
      {
        next(res){
          console.log(res);
        },error(err){
          console.log(err.message);
        }
      }
    );
  }
}
