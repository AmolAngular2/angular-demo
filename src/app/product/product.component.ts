import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 productModal:ProductModel = new ProductModel();
 categoryArr:string[] = [];
 subCategoryArr:string[] = [];

 categoryObj:any = {
  "fruits":["Fresh Fruits","Fresh Vegetables"],
  "foodGrains":["Dry Fruits","Dals & Pulses"]
}

 calculateTotalPrice(){
  console.log("product Data",this.productModal);

  this.productModal.totalPrice = (Number(this.productModal.price) * Number(this.productModal.quantity)) - Number(this.productModal.discount);
 }



 ngOnInit(){
  this.categoryArr = Object.keys(this.categoryObj);
  console.log("CategoryArr ", this.categoryArr);
 }

 reset(){
  // this.productModal.productName = "";
  // this.productModal.price = 0 ;
  // this.productModal.quantity = 0 ;
  // this.productModal.totalPrice = 0 ;
  // this.productModal.discount = 0 ;
  this.productModal = new ProductModel();
 }

 getSubCatgory(){
   this.subCategoryArr = this.categoryObj[this.productModal.categoryName]
 }

}

export class ProductModel {
   productName!:string;
   price!:number;
   quantity!:number;
   discount!:number;
   totalPrice!:number;
   categoryName!:string;
   subCategroyName!:string
}

