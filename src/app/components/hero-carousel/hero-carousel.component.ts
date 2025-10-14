
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit{


    slides = [
    {
      image: 'https://www.polkadots.pk/cdn/shop/files/GIRLS_website-cover-PC.jpg?v=1758017497&width=2000',
      title: 'Stylish Apparel',
      subtitle: 'Upgrade your wardrobe today'
    },
    {
      image: 'https://www.polkadots.pk/cdn/shop/files/Sale_website-cover-PC.jpg?v=1758018166&width=2000',
      title: 'Modern Footwear',
      subtitle: 'Walk with confidence'
    },
    {
      image: 'https://www.polkadots.pk/cdn/shop/files/website-cover-PC_86d04c3f-5087-4c37-a31a-b59f4923e2d3.jpg?v=1758015376&width=2000',
      title: 'Elegant Bags',
      subtitle: 'Carry your essentials in style'
    },
    {
      image: 'https://www.polkadots.pk/cdn/shop/files/2-PIECE_website-cover-PC.jpg?v=1758100824&width=2000',
      title: 'Trendy Accessories',
      subtitle: 'Add the finishing touch'
    }
  ];
  
  
   
  index = 0;
  visibleItems = 4; // How many items are visible at once

  ngOnInit(): void {}

  nextSlide() {
    if (this.index < this.slides.length - this.visibleItems) this.index++;
  }

  prevSlide() {
    if (this.index > 0) this.index--;
  }

girlsCollections = [
  {
    title: '1 - 6 YRS',
    image: 'https://www.polkadots.pk/cdn/shop/files/1-6_4d56c92e-96e2-490e-a5c2-076af7f7de66.jpg?v=1740048415&width=400',
    link: '/collections/girls-1-to-6-years'
  },
  {
    title: '6 - 14 YRS',
    image: 'https://www.polkadots.pk/cdn/shop/files/6-14_622ca803-56a3-48c5-a992-01533b839506.jpg?v=1740048485&width=400',
    link: '/collections/girls-6-to-14-years'
  },
  {
    title: 'PANTS',
    image: 'https://www.polkadots.pk/cdn/shop/files/Girls_Pants.jpg?v=1729759123&width=400',
    link: '/collections/girls-pants'
  },
  {
    title: 'SALE',
    image: 'https://www.polkadots.pk/cdn/shop/files/Girls_Sale_New.jpg?v=1729762377&width=400',
    link: '/collections/new-girls-sale'
  }
];



  }


