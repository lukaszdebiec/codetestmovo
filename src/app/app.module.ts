import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { ProductsService } from './services/products.service';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { ProductResolver } from './services/product.resolver';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavigationComponent,
    ProductComponent,
    CategoryComponent,
    SpinnerComponent,
    CategoryProductsComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    ProductsService,
    ProductResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
