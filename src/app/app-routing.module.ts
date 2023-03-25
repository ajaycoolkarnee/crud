import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
 
  {
    path: '', component: AddStudentComponent
  },
  {
    path: 'add', component: AddStudentComponent
  },
  {
    path: 'edit/:id', component: EditStudentComponent
  },
  {
    path: 'list', component: ListStudentComponent
  },
  {
    path: 'login', component: LoginStudentComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
