import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  cartItems:any[]=[];
  subTotal = 0;

  constructor(private cartService:CartService){}

  loadCart(){
    this.cartItems = this.cartService.getItems();
  }
increaseQynatity(item: any){
item.quantity++;
}

decreaseQuantity(item: any){
  item.quantity--;
}

removeItem(){
  this.cartItems.splice(index, 1)
}

}
