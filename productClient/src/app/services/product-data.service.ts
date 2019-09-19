import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  url = 'http://localhost:8080/api/products/';

  constructor(private http: HttpClient) { }

  /*
  * getProducts
  */
  public getProducts(): any {
    return this.http.get(this.url).pipe(
      map(res => {
        return res;
      })
    );
  }

  public create(product): any {
    return this.http.post(this.url, product).pipe(
      map(res => {
        return res;
      })
    );
  }

  public update(product): any {
    return this.http.put(this.url, product).pipe(
      map(res => {
        return res;
      })
    );
  }

  public getProduct(id: number): any {
    return this.http.get(this.url + id).pipe(
      map(res => {
        return res;
      })
    );
  }

  public delete(id: number): any {
    return this.http.delete(this.url + id).pipe(
      map(res => {
        return res;
      })
    );
  }
}
