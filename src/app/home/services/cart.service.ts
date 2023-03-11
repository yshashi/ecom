import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class CartService{

  public cartItems:any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(){

  }

  addToCart(product:any){
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
  }
}
