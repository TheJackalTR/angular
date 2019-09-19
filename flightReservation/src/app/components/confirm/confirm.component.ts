import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  reservationId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.reservationId = Number.parseInt(this.route.snapshot.paramMap.get('id'));

  }

}
