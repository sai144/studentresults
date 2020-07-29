import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentResultService } from '../student-results/services/student-result.service';
import { StudentResultComponent } from '../student-results/components/student-result.component';
import { StudentRegistrationComponent } from '../student-results/components/student-registration.component';
import { StudentDetailsComponent } from '../student-results/container/student-details.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentResultComponent,
    StudentRegistrationComponent,
    StudentDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
  providers: [StudentResultService],
  bootstrap: [AppComponent],
})
export class AppModule {}
