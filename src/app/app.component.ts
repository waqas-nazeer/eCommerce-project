import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HeroCarouselComponent,FooterComponent,CategoriesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
