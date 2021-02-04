import { Component, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: ``
})
export class AppComponent {
    mycour='';
    constructor() {
    }
    
    addnewCourse(newCourse: string) {
        if (newCourse) {
            this.allCourses.push(newCourse);
        }
    }

    allCourses: Array<any> = [
        { name: 'Java', students: [{name:'A'},{name:'BC'},{name:'V'}] },
        { name: 'Python', students: [{name: 'B'},{name: 'W'},{name:'S'}]},
        { name: 'Data Science',students: [{name: 'C'},{name: 'X'},{name:'CT'}]},
        { name: 'AI', students: [{name:'NT'}]},
    ];
    students: Array<any>;

    changeCourses(cour) {
        this.students = this.allCourses.find(cours => cours.name == cour).students;
    }
  
    	

}