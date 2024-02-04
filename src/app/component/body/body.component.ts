import { Component, Directive } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../../model/Model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  public models: Array<any>
  private url: string = "http://localhost:8080/students";

  constructor(private httpClient: HttpClient) {
    this.models = new Array<any>();
    // GET Models
    this.httpClient.get<Array<any>>(this.url)
      .subscribe(
        (res) => { this.models.push(...res) },
        (err) => { console.log(err) }
      );
  }

  public test(){
    this.httpClient.get<any>(this.url)
      .subscribe(
        (res) => { console.log(res) } // Correct log statement
      );
      console.log(this.models)
  }
}
