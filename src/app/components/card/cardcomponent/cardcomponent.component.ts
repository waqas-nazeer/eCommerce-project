import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AddToCartComponent } from '../../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-cardcomponent',
  standalone: true,
  imports: [CommonModule,RouterLink,AddToCartComponent],
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent implements OnInit {
 


category = '';
products: any[]=[];
constructor(private route : ActivatedRoute, private router:Router){}


 ngOnInit(): void {
   
  this.route.paramMap.subscribe(params => {
    this.category = params.get('category') || 'default';
    this.loadCategory(this.category);
  });
 

 }
 loadCategory(category : string){  
  if (this.category === 'women') {
    
    this.products = [
    {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '/addToCart'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
   {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
      {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    // add more here...
  ];
  }else if (this.category ==='womenPants') {
    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
  } else if (this.category ==='western') {
    
    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
    
  }else if (this.category === 'girls'){

    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    }
    ]
  }else if (this.category ==='boys') {
    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
  }else if (this.category ==='essentials') {
    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
  } else if (this.category === 'mom&daughter') {
    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
  } else if (this.category === 'accessories'){
    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
  } else if (this.category === 'sleepwear') {
    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
  } else if (this.category === 'fragrances') {
    this.products =[
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
  } else if (this.category === 'winter') {
    this.products =[ {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },

    ]
  } else if (this.category === 'bundles') {
   this.products = [
     {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '#'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
   ]   
  } else if (this.category === 'upto70%') {
    this.products = [
       {
      title: '2 PIECE SUIT',
      price: 4950,
      mainImage: '//www.polkadots.pk/cdn/shop/files/Orange_fbcfdd42-01f2-4407-a1cb-58e35d78d4f1.jpg?v=1756901189',
      hoverImage: '//www.polkadots.pk/cdn/shop/files/Hanger_bc748f5e-95fc-4ddd-83e8-b7dd2f804112.jpg?v=1756901190',
      link: '/addToCart'
    },
    {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
 {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
  {
      title: '3 PIECE SUIT',
      price: 6250,
      mainImage: 'https://www.polkadots.pk/cdn/shop/files/L-Grey_c66b5ceb-1cfa-423a-aceb-8650884cad7b.jpg?v=1759492198&width=900',
      hoverImage: 'https://www.polkadots.pk/cdn/shop/files/Hanger_c4fccf4c-0ff8-4a31-a5b0-c4821c048251.jpg?v=1759492224&width=600',
      link: '#'
    },
    ]
  }

  


 }

 


}
