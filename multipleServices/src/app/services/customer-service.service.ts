import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private _http:HttpClient) { }

  public getCustomers(){
    return this._http.get("https://www.w3schools.com/angular/customers.php").pipe(
      map(res=>{
        return res;
      })
    );
  }
}
