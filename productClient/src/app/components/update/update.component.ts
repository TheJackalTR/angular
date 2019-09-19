import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private updateResponse: any;
  constructor(private service: ProductDataService) { }

  ngOnInit() {
  }

  public updateProduct(product: any) {
    this.service.update(product).subscribe(res => {
      this.updateResponse = res;
    });
  }// function
}// class
