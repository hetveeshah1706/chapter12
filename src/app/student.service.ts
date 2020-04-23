import { Injectable } from '@angular/core';
import { student } from './student_class';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  arrStudent:student[]=[
    new student(1,'Mohan'),
    new student(2,'Sohan')
  ];
  constructor() { }
  getAllStudents(){
    return this.arrStudent
  }
}
