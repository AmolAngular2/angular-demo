import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){
    console.log("Feature 2 Development is in progress")
  }


  ngOnInit(): void {
    
  }
  title = 'my-crud-app';

  message:string="Angular Development Course";


  

}
