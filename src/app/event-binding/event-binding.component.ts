import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  count:number = 0;

  login(){
    console.log("Login Success");
  }

  addToCart(){
    ++this.count
  }

  removeFromCart(){
    --this.count;
  }

  performAction(actionName:string){
    if(actionName === 'Increment'){
      this.count++
    }else {
      this.count--;
    }
  }

  
  print(){
    console.log("mouse over");
  }

  enterdName:string="";

  lastName:string="";
  firstName:string="";
  cityName:string="Pune"; 

  stateName:string="Maharashtra";

  firstNameChanged(data:any){
    console.log("Change event fired ",data.target.value);
    //logic 
    this.firstName = data.target.value;

    this.enterdName = this.firstName + " " + this.lastName;
  }

  lastNameChanged(eventData:any){
   this.lastName = eventData.target.value ;
   console.log("Last Name",this.lastName);
   this.enterdName = this.firstName + " " + this.lastName;
  }


  cityNameChanged(eventData:any){
   this.cityName =  eventData.target.value ;
   console.log("cityName",this.cityName);
  }


  printStateName(){
    console.log("State Name",this.stateName);
  }
}
