import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent {


  isShow:boolean = true ;
  isDisplay:boolean = true;
  contactPreference:string="Mobile";

  toggle(){
    this.isDisplay = !this.isDisplay;
  }


  selectedDay:string="";
  
  coursesList:string[]=['Angular','Java','Software Testing','DevOps AWS']

  weekdays:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

}
