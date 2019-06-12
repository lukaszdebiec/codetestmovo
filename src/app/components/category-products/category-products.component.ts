import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  products: Product[];
  category;
  showVat = true;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.routeConfig.path.toString();
    this.productService.getProducts().subscribe(products => {
      this.products = products.filter(p => p.category == this.category)
    });
  }

  showStatus(){
    this.showVat = !this.showVat;
    console.log(this.showVat);
  }

}
