import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Autoplay]);

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movies[] = [];
  mySwiper?: Swiper; 

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
      speed: 400,
      spaceBetween: 100,
      effect: 'fade',
      autoplay: {
        delay: 10000,
      },
    });
  }

  ngOnInit() {
  }

  onSlideNext() {
    this.mySwiper!.slideNext();
  }

  onSlidePrev() {
    this.mySwiper!.slidePrev();
  }

}
