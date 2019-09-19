import { Component, OnInit } from '@angular/core';
import { CheckinService } from 'src/app/services/checkin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  data: any;
  constructor(private service: CheckinService, private router: Router) { }

  ngOnInit() {
    this.data = this.service.reservationData;
    console.log(this.data);
  }

  /**
   * checkIn
   */
  public checkIn(noOfbags: number) {
    const request = {
      id: this.data.id,
      checkIn: true,
      numberOfbags: noOfbags
    };
    this.service.checkin(request).subscribe(res => {
      this.router.navigate(['/confirm']);
    });
  }

}
