import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRegistrationComponent } from '../student-results/components/student-registration.component';
import { StudentResultComponent } from '../student-results/components/student-result.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'studentresult',
    pathMatch: 'full'
  },
  {
    path: 'studentresult',
    component: StudentResultComponent,
  },
  {
    path: 'studentregistration',
    component: StudentRegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
