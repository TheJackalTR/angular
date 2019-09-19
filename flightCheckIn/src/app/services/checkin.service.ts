import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  reservationUrl = 'http://localhost:8080/flightservices/reservations/';
  reservationData: any;
  constructor(private http: HttpClient) { }

  /**
   * getReservation
   */
  public getReservation(id: number): any {
    return this.http.get(this.reservationUrl + id).pipe(
      map(response => {
        this.reservationData = response;
      })
    );
  }

  public checkin(checkInRequest): any {
    return this.http.put(this.reservationUrl, checkInRequest).pipe(
      map(response => {
        return response;
      })
    );
  }
}
