import { AfterViewInit, Component, Input } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import Swiper, { Navigation, Autoplay } from 'swiper';
Swiper.use([Navigation, Autoplay]);

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements AfterViewInit {
  @Input() movies: Movies[] = [];
  mySwiper?: Swiper; 

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      loop: true,
      speed: 400,
      spaceBetween: 100,
      effect: 'fade',
      autoplay: {
        delay: 10000,
      },
      breakpoints: {
        992: {
            spaceBetween: 20
        }
    }
    });
  }

  onSlideNext() {
    this.mySwiper!.slideNext();
  }

  onSlidePrev() {
    this.mySwiper!.slidePrev();
  }

}
