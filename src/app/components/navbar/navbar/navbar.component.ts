import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartCount: number = 0;

  // Toggle track order image on hover
  toggleTrackHover(event: any, showPink: boolean) {
    const black = event.target.parentElement.querySelector('.track-black');
    const pink = event.target.parentElement.querySelector('.track-pink');
    if (showPink) {
      black.classList.add('d-none');
      pink.classList.remove('d-none');
    } else {
      black.classList.remove('d-none');
      pink.classList.add('d-none');
    }
  }

  categories = [
  {
    name: 'WESTERN',
    subcategories: ['Tops', 'Dresses', 'Pants', 'Skirts', 'Jumpsuits']
  },
  {
    name: 'GIRLS',
    subcategories: ['Frocks', 'Jeans', 'T-Shirts', 'Accessories']
  },
  {
    name: 'BOYS',
    subcategories: ['Shirts', 'Shorts', 'Denim', 'Jackets']
  },
  {
    name: 'ACCESSORIES',
    subcategories: ['Bags', 'Jewelry', 'Belts', 'Hats']
  },
  {
    name: 'SALE',
    subcategories: ['Up to 50% Off', 'Clearance Items']
  }
];

}
