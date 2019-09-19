import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http:HttpClient) { }

  /**
   * getCountries
   */
  public getCountries():any {
    return this._http.get("https://restcountries.eu/rest/v2/all").pipe(map(response=>{
      console.log(response);
      return response;
    },
    error=>{
      this.handleError(error);
    }
  ));
  }

  /**
   * handleError
   */
  public handleError(error) {
    console.error("Error is: " + error);
    return Observable.throw(error || "ınternal Server Error");
  }
}
