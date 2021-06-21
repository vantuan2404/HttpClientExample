import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { DataFace } from "./data.model";


@Injectable()

export class RenderData{
  constructor(private _Http: HttpClient){}

  getUser():Observable<[]>{
    return this._Http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      map((response:any)=>response)
    )
  }

  
}