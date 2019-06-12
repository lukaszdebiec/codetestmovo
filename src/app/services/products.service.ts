import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;

  constructor(public firestoreGate:AngularFirestore) {
    this.productsCollection = this.firestoreGate.collection("products");

}

getProducts():Observable<Product[]>{
  return  this.products = this.firestoreGate.collection('products').snapshotChanges().pipe(map(changes => { return changes.map(a=>{ const data = a.payload.doc.data() as Product; data.id = a.payload.doc.id; return data; }); }));
}

addProduct(product:Product){
  this.firestoreGate.collection('products').add(product);
}

deleteProduct(product:Product){
  this.productDoc = this.firestoreGate.doc('products/'+product.id);
  this.productDoc.delete();
}

updateProduct(product:Product){
  this.productDoc = this.firestoreGate.doc('products/'+product.id);
  this.productDoc.update(product);
}

}