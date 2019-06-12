import { Injectable } from "node_modules/@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "node_modules/@angular/router";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsService } from './products.service';
import { Product } from '../models/product';

@Injectable()
export class ProductResolver implements Resolve<Product[]> {
    
    constructor(private resultService: ProductsService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product[]>{
        return this.resultService.getProducts().pipe(
            catchError(error => {
                console.log('GOWNO')
                return of(null);
            })
        );
    }
}