import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-image-scroller',
  templateUrl: './image-scroller.component.html',
  styleUrls: ['./image-scroller.component.scss'],
})
export class ImageScrollerComponent implements OnInit {
  images = [
    'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
    'https://img.freepik.com/premium-photo/lake-pier-with-mountains-background_1033303-296.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais',
    'https://img.freepik.com/premium-photo/mountain-lake-with-mountain-background_865967-416815.jpg',
  ];

  swiperModules = [IonicSlides];

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
  };

  constructor() {}

  ngOnInit() {}
}