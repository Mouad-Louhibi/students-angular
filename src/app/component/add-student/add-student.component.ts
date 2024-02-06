import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Model } from '../../model/Model';
import { Service } from '../../service/Service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  public form: any;
  public models: Array<Model>

  constructor(private service: Service) {
    this.models = this.service.getModels();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      sujet: new FormControl(''),
      description: new FormControl(''),
      chef: new FormControl(''),
      chercheur: new FormControl(''),
    })
  }

}
