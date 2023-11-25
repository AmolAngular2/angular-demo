import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  firstName:string="Mike";

  companyName:string="Google";

  employeeObj:any = {
    employeeName:"John",
    designation:"Angular Developer",
    salary:40000,
    skills:["Angular","HTML"]
  }

  isBtnDisabled:boolean = true;
  imgPath:string="https://th.bing.com/th/id/OIP.u3mgmYMq4ofTd4lBtZtbxQHaD4?pid=ImgDet&rs=1"; 


  message1:string="Welcome to the Velocity";
  annualSalary:number = 45000;
  totalPrice:number=3412.1234;

  todaysDate = new Date();

}


