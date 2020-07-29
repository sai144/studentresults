import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: 'student-details.component.html',
  styleUrls: ['student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
}
