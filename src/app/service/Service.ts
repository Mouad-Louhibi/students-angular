import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../model/Model';

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
      let obj: Model = new Model;
      obj.fname = item.student.fname;
      obj.lname = item.student.lname;
      obj.dob = item.student.dob;
      obj.name = item.subject.name;
      obj.section = item.subject.section;
      obj.teacher = item.subject.teacher;
      temp.push(obj)
    });
    
    return temp;
  }

  public addStudent(newStudent: Model): void {
    console.log(newStudent)
    this.httpClient.post<any>(this.ur, newStudent)
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

}