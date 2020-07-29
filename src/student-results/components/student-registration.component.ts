import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-registration',
  templateUrl: 'student-registration.component.html',
  styleUrls: ['student-registration.component.scss'],
})
export class StudentRegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  studentprofileForm = this.fb.group({
    Name: [
      '',
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[A-Za-z]+$'),
      ],
    ],
    LastName: [
      '',
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[A-Za-z]+$'),
      ],
    ],
    Class: ['', [Validators.required, Validators.required]],
    YearOfPassing: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    PercentageOfMarks: [
      '',
      [Validators.required, Validators.pattern('^[0-9]*$')],
    ],
  });
  get Name() {
    return this.studentprofileForm.get('Name');
  }
  get LastName() {
    return this.studentprofileForm.get('LastName');
  }
  get YearOfPassing() {
    return this.studentprofileForm.get('YearOfPassing');
  }
  get Class() {
    return this.studentprofileForm.get('Class');
  }
  get PercentageOfMarks() {
    return this.studentprofileForm.get('PercentageOfMarks');
  }
  ngOnInit() {}
  onSubmit() {}
}
