import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: any[] = [];
  subtotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getItems();
    this.calculateSubtotal();
  }

  increaseQuantity(item: any) {
    item.quantity++;
    this.updateCart();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  updateCart() {
    // Update subtotal
    this.calculateSubtotal();

    // Update total count in the service
    const totalQuantity = this.cartItems.reduce((acc, i) => acc + i.quantity, 0);
    this.cartService['cartCount'].next(totalQuantity);
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }
}
