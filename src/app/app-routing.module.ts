import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { ListStudentsComponent } from './component/list-students/list-students.component';

const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: 'list-students', component: ListStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
