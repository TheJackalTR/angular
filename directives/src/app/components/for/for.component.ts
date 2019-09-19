import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  courses:string[];
  students:object[];
  color:string;
  fontSize:string;
  useTdata:boolean;
  classObj:Object;


  constructor() {
    this.courses = ["Angular","React", "Node"];
    this.students = [{fName:"john",lName:"Bailey",score:90},
    {fName:"Bob",lName:"Reddy",score:80}];
    this.color = "green";
    this.fontSize = "40";
    this.useTdata = false;
    this.classObj = {
      tdata:this.useTdata
    }
   }

  ngOnInit() {
  }

}
