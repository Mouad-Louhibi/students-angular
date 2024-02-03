import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class Service {

  public models: Array<Model>
  private url: string = "http://localhost:8080/students";

  constructor(private httpClient: HttpClient) {
    this.models = new Array<Model>();
    // GET Models
    this.httpClient.get<Array<Model>>(this.url)
      .subscribe(
        (res) => { this.models.push(...res) },
        (err) => { console.log(err) }
      );

      alert(this.models);
  }
}