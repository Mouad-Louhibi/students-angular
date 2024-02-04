import { Component, Directive } from '@angular/core';

import { Model } from '../../model/Model';
import { Service } from '../../service/Service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  public models: Array<Model>

  constructor(private service: Service) {
    this.models = this.service.getModels();
  }
}
