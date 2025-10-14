import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, AfterViewInit, OnDestroy {


   carouselItems = [
    {
      title: 'WOMEN',
      image: 'https://www.polkadots.pk/cdn/shop/files/WOMEN_SALE_a79370bf-be0a-4ac7-b513-19878a1302a4.jpg',
      link: '/collections/new-women-sale'
    },
    {
      title: 'GIRLS',
      image: 'https://www.polkadots.pk/cdn/shop/files/GIRLS_SALE_be82d469-12dc-437d-b94c-adce11cbc6ed.jpg',
      link: '/collections/new-girls-sale'
    },
    {
      title: 'BOYS',
      image: 'https://www.polkadots.pk/cdn/shop/files/Boys_Sale_eaab0cfc-8416-4538-ab6d-3a49d75f64ff.jpg?v=1752838725&width=400',
      link: '/collections/boys-sale'
    },
    {
      title: 'ACCESSORIES',
      image: 'https://www.polkadots.pk/cdn/shop/files/ACCESORIES_e24fce15-ba27-48f3-b967-a3f606186aaf.jpg',
      link: '/collections/accessories-sale'
    },
    {
      title: 'CO-ORDS',
      image: 'https://www.polkadots.pk/cdn/shop/files/Co-ORD_Sale.jpg',
      link: '/collections/women-pret-sale'
    },
    {
      title: 'WESTERN',
      image: 'https://www.polkadots.pk/cdn/shop/files/Western_Sale.jpg',
      link: '/collections/women-western-sale'
    },
    {
      title: 'PANTS',
      image: 'https://www.polkadots.pk/cdn/shop/files/TROUSER_SALE.jpg',
      link: '/collections/women-pants-sale'
    },
    {
      title: 'SLEEPWEAR',
      image: 'https://www.polkadots.pk/cdn/shop/files/Sleepwear_Sale.jpg',
      link: '/collections/women-sleepwear-sale'
    }
  ];

  private carouselInner: HTMLElement | null = null;
  private currentPosition = 0;
  private cardWidth = 232; // 220px + 12px margin
  private maxPosition = 0;
  private autoScrollInterval: any;

  @HostListener('window:resize')
  onResize() {
    this.updateCarouselDimensions();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeCarousel();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  private initializeCarousel() {
    this.carouselInner = document.getElementById('carouselInner');
    this.updateCarouselDimensions();
    this.startAutoScroll();
  }

  private updateCarouselDimensions() {
    if (this.carouselInner) {
      this.maxPosition = this.carouselInner.scrollWidth - this.carouselInner.clientWidth;
      this.updateButtonVisibility();
    }
  }

  private updateButtonVisibility() {
    const prevButton = document.querySelector('.carousel-control.prev') as HTMLElement;
    const nextButton = document.querySelector('.carousel-control.next') as HTMLElement;
    
    if (prevButton && nextButton) {
      prevButton.style.display = this.currentPosition <= 0 ? 'none' : 'flex';
      nextButton.style.display = this.currentPosition >= this.maxPosition ? 'none' : 'flex';
    }
  }

  scrollNext() {
    if (this.currentPosition < this.maxPosition) {
      this.currentPosition += this.cardWidth * 2;
      if (this.currentPosition > this.maxPosition) this.currentPosition = this.maxPosition;
      this.updateCarouselPosition();
    }
  }

  scrollPrev() {
    if (this.currentPosition > 0) {
      this.currentPosition -= this.cardWidth * 2;
      if (this.currentPosition < 0) this.currentPosition = 0;
      this.updateCarouselPosition();
    }
  }

  private updateCarouselPosition() {
    if (this.carouselInner) {
      this.carouselInner.style.transform = `translateX(-${this.currentPosition}px)`;
      this.updateButtonVisibility();
    }
  }

  private startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      if (this.currentPosition >= this.maxPosition) {
        this.currentPosition = 0;
      } else {
        this.currentPosition += this.cardWidth;
        if (this.currentPosition > this.maxPosition) this.currentPosition = this.maxPosition;
      }
      this.updateCarouselPosition();
    }, 3000);
  }

  private stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  onCarouselMouseEnter() {
    this.stopAutoScroll();
  }

  onCarouselMouseLeave() {
    this.startAutoScroll();
  }
}
