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
}
