import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../model/Model';
import { Student } from '../model/Student';
import { Subject } from '../model/Subject';

@Injectable({
  providedIn: 'root'
})
export class Service {

  public models: Array<any>
  private url: string = "http://localhost:8080/students";
  private ur: string = "http://localhost:8080/student";

  constructor(private httpClient: HttpClient) {
    this.models = new Array<any>();
    // GET Models
    this.httpClient.get<Array<any>>(this.url)
      .subscribe(
        (res) => { this.models.push(...res) },
        (err) => { console.log(err) }
      );
  }

  public getModels(): Array<Model>{
    let temp: Array<Model> = [];

    this.models.forEach(item => {
      let subject: Subject = new Subject;
      let student: Student = new Student;
      student.fname = item.student.fname;
      student.lname = item.student.lname;
      student.dob = item.student.dob;
      subject.name = item.subject.name;
      subject.section = item.subject.section;
      subject.teacher = item.subject.teacher;
      temp.push({student, subject})
    });
    
    return temp;
  }

  public addStudent(newStudent: Student, newSubject: Subject): void {
    this.httpClient.post<any>(this.ur, {newStudent, newSubject})
    .subscribe(
      (res) => {
        if (res.message === 'Student Created Successfully') {
          location.replace("http://localhost:4200")
        } else {
          window.alert(res.message)
        }
      },
      (err) => { console.log(err) },
      () => { console.log("Student Created") }
    );  }

    public getStudent(id: number): Model{
      return new Model;
    }

}