import { Component, } from '@angular/core';
import { CardcomponentComponent } from '../card/cardcomponent/cardcomponent.component';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CardcomponentComponent,HeroCarouselComponent,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



}
