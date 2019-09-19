import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private _http:HttpClient) { }

  public helloService(){
    return this._http.get("http://test-routes.herokuapp.com/test/hello").pipe(
      map(res=>{
        return res;
      })
    )
  }
}
