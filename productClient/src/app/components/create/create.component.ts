import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private createResponse;

  constructor(private service: ProductDataService) { }

  ngOnInit() {
  }

  public createProduct(product: any) {
    this.service.create(product).subscribe(res => {
      this.createResponse = res;
    });
  }

}
