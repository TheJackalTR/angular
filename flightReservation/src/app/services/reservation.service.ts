import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  flightUrl = 'http://localhost:8080/flightservices/flights';
  reservationUrl = 'http://localhost:8080/flightservices/reservations';
  flightData: any;

  constructor(private http: HttpClient) { }

  /**
   * getFlights
   */
  public getFlights(from: string, to: string, departureDate: string): any {
    return this.http.get(this.flightUrl + '?from=' + from + '&to=' + to + '&departureDate=' + departureDate)
    .pipe(
      map(res => {
        this.flightData = res;
      })
    );
  }

  /**
   * getFlight
   */
  public getFlight(id: number): any {
    return this.http.get(this.flightUrl + '/' + id)
    .pipe(
      map(
        res => {
          return res;
        }// res
      ) // map
    ); // pipe
  }   // getFlight

  /**
   * saveReservation
   */
  public saveReservation(reservation): any {
    return this.http.post(this.reservationUrl, reservation)
    .pipe(
      map(
        res => {
          return res;
        },
        err => {
          console.error(err);
        }// res
      ) // map
    ); // pipe
  }   // saveReservation
}
