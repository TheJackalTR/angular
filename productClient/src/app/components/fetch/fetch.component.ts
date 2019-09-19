import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  private getProductResponse: any;
  constructor(private service: ProductDataService) { }

  ngOnInit() {
  }

  public getProduct(id: number) {
    this.service.getProduct(id).subscribe(res => {
      this.getProductResponse = res;
    });
  }// getProduct
}// class
