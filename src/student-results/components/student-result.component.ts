import { Component, OnInit, Inject } from '@angular/core';
import { StudentResultService } from '../services/student-result.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-result',
  templateUrl: 'student-result.component.html',
  styleUrls: ['student-result.component.scss'],
})
export class StudentResultComponent implements OnInit {
  constructor(public result: StudentResultService,private router: Router) {}
  studentresults;
  ngOnInit() {
    this.studentresults = this.result.getStudentresults();
  }
}
