import { Component, OnInit, VERSION } from '@angular/core';
import { DataFace } from './data.model';
import { RenderData } from './myService.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[RenderData]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  users = [];

  constructor(private _service: RenderData){}

  ngOnInit(){
    this.resultUser();
  }

  resultUser(){
    this._service.getUser().subscribe(
      response=> this.users = response
    )
  }
}
