import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardcomponentComponent } from '../../card/cardcomponent/cardcomponent.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,CardcomponentComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartCount: number = 0;
  showWomenMegaMenu: boolean = false; 

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
