import { Component, Directive } from '@angular/core';

import { Model } from '../../model/Model';
import { Service } from '../../service/Service';
import { Student } from '../../model/Student';
import { Subject } from '../../model/Subject';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {

  public student: Student = new Student;
  public subject: Subject = new Subject;

  public models: Array<Model>

  constructor(private service: Service) {
    this.models = this.service.getModels();
  }
}
