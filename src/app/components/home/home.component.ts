import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
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
export class HomeComponent implements OnInit , OnDestroy{


    showHero = true;

  private Sub?: Subscription;
  constructor(private router:Router){}

    ngOnInit() {
    this.Sub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: { urlAfterRedirects: string; }) => {
        // ✅ Show hero only on homepage
        this.showHero = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/home';
      });
  }


  ngOnDestroy() {
    this.Sub?.unsubscribe();
  }

}
