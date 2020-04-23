import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { student } from '../student_class';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentData:StudentService) { }
  studentArr:student[]=[];
  ngOnInit(): void {
    this.studentArr=this.studentData.getAllStudents();
  }

}
