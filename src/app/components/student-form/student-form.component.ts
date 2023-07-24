import { Component, OnInit } from '@angular/core';
import { employ, obj, studentForm } from '../form';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
 
export class StudentFormComponent implements OnInit {
  data:any
  student: studentForm = {
    name: 'Umar',
    age: 25,
    department: 'BSCS'
  };
  stForm:obj={
    name:"Mudassir",
    age:"23"
  }

  arr:employ[]=[
    {
      id: 1,name: 'Mudassir Hussain'
           
    },
    {
      id:66,
      name:"Ali"
    }
  ]
  

  
  constructor() { }

  ngOnInit(): void {
  }

}
