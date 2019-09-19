import { Component } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private products: any;
  private createResponse: any;
  private updateResponse: any;
  private getProductResponse: any;
  private deleteResponse: any;

  constructor(private service: ProductDataService) {

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.service.getProducts().subscribe(res => {
      this.products = res;
    });
  }// ngOnInıt
}// class
