import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConverterService {

  constructor(private _http:HttpClient) { }

  public convertToUppercase(obj):any{
    return this._http.post("http://test-routes.herokuapp.com/test/uppercase",obj).pipe(
    map(res=>{
      return res;
    },
    err=>{
      this.handleError(err);
    }));
  }

  handleError(err){
    console.error(err);
    return Observable.throw(err || "Internal Server Error");
  }
}
