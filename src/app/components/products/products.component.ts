import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  showVat = true ;


  constructor(private productsService: ProductsService) { }


  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products
    });
    console.log(this.products)
  }

  showStatus(){
    this.showVat = !this.showVat;
    console.log(this.showVat);
  }

}
