import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
 
  // Dummy product data
  colors = ['Green', 'Sea Green', 'Sky Blue'];
  sizes = ['S', 'M', 'L', 'XL'];
  materials = ['Khaddar'];

  selectedColor = 'Sea Green';
  selectedSize = 'M';
  selectedMaterial = 'Khaddar';
  quantity = 1;

  activeTab = 'details';

  constructor(private cartService : CartService){}
  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    const product = {
      color: this.selectedColor,
      size: this.selectedSize,
      material: this.selectedMaterial,
      quantity: this.quantity
    };

    this.cartService.addToCart(product)
    console.log('Added to cart:', product);
    alert(`Added ${this.quantity} item(s) to cart!`);
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }


  
}
