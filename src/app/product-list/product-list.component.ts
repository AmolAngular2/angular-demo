import { Component } from '@angular/core';
import { SearchPipePipe } from '../pipes/search-pipe.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
   searchText:string="";
   noRecordsFound:boolean = false;
  productList:any = [
     {productName:"IPHONE 13",price:45000,quantity:1},
     {productName:"ONE PLUS",price:35000,quantity:1},
     {productName:"table",price:5000,quantity:5},
     {productName:"TV",price:45000,quantity:2},
     {productName:"Samsung",price:30000,quantity:2},
     {productName:"Tshirt",price:3000,quantity:2},
     {productName:"Shoes",price:5000,quantity:1},
  ]

  print(){
    console.log("Hi");
  }

  save(){
    console.log("Save Clicked");
  }

  constructor(private searchPipe:SearchPipePipe){

  }

  testPipe(){
   const Data = this.searchPipe.transform(this.productList,this.searchText);
   if(Data && Data.length == 0){
     this.noRecordsFound = true ;
   }else {
    this.noRecordsFound = false;
   }
  }

}
