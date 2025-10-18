import { Component, OnDestroy, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CardcomponentComponent } from './components/card/cardcomponent/cardcomponent.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,NgIf,
    RouterOutlet,
    NavbarComponent,

    FooterComponent,
  
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

}
