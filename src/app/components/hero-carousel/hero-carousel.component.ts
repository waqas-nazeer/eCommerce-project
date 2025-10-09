// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-hero-carousel',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './hero-carousel.component.html',
//   styleUrls: ['./hero-carousel.component.css']
// })
// export class HeroCarouselComponent {
//   slides = [
//     {
//       image: 'https://source.unsplash.com/1200x500/?clothes,fashion',
//       title: 'Latest Fashion',
//       subtitle: 'Discover the new trends'
//     },
//     {
//       image: 'https://source.unsplash.com/1200x500/?shoes,sneakers',
//       title: 'Top Shoes',
//       subtitle: 'Step into style'
//     },
//     {
//       image: 'https://source.unsplash.com/1200x500/?bags,handbag',
//       title: 'Stylish Bags',
//       subtitle: 'Carry your essentials'
//     },
//     {
//       image: 'https://source.unsplash.com/1200x500/?accessories,jewelry',
//       title: 'Accessories',
//       subtitle: 'Complete your look'
//     }
//   ];
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent {

  // Function to generate random image URL
  getRandomImage(query: string) {
    const randomNum = Math.floor(Math.random() * 1000); // random number to force new image
    return `https://source.unsplash.com/1200x500/?${query}&sig=${randomNum}`;
  }

  slides = [
    {
      image: this.getRandomImage('clothes,fashion'),
      title: 'Latest Fashion',
      subtitle: 'Discover the new trends'
    },
    {
      image: this.getRandomImage('shoes,sneakers'),
      title: 'Top Shoes',
      subtitle: 'Step into style'
    },
    {
      image: this.getRandomImage('bags,handbag'),
      title: 'Stylish Bags',
      subtitle: 'Carry your essentials'
    },
    {
      image: this.getRandomImage('accessories,jewelry'),
      title: 'Accessories',
      subtitle: 'Complete your look'
    }
  ];
}
