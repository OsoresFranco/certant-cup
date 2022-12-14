import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Slide {
  image: string;
  caption?: string;
  text?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images: Slide[] = [
    {
      image: `../../../assets/carouselImages/grupo_1.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_2.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_3.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_4.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_5.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_6.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_7.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_8.png`,
    },
  ];

  constructor(private router: Router) {}

  redirectTo() {
    this.router.navigate(['certantcup/jackpot']);
  }

  ngOnInit(): void {}
}
