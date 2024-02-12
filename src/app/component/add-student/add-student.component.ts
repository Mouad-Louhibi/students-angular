import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Model } from '../../model/Model';
import { Service } from '../../service/Service';
import { Student } from '../../model/Student';
import { Subject } from '../../model/Subject';

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
      fname: new FormControl(''),
      lname: new FormControl(''),
      dob: new FormControl(''),
      name: new FormControl(''),
      section: new FormControl(''),
      teacher: new FormControl('')
    })
  }

  public onSubmit(): void {
    this.service.addStudent(
      new Student(
        this.form.controls['fname'].value,// First name
        this.form.controls['lname'].value,// Last name
        this.form.controls['dob'].value,// Date Of Birth
      ),
      new Subject(
        this.form.controls['name'].value,// Subject Name
        this.form.controls['section'].value,// Section
        this.form.controls['teacher'].value// Teacher
      )
    )    
    this.form.reset()
  }

}
