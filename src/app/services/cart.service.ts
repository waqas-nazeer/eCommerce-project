import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 constructor() { }
   private cartItems :any[] = [];
private  cartCount = new BehaviorSubject<number>(0)
 

cartCount$ = this.cartCount.asObservable();

addToCart(product : any){
this.cartItems.push({...product});
const totalQuantity = this.cartItems.reduce((acc, item)=> acc + item.quantity, 0);
this.cartCount.next(totalQuantity);
}


getItems(){
  return this.cartItems;
}

clearCart(){
  this.cartItems = [];
  this.cartCount.next(0);
}

}
