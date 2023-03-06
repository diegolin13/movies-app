import { AfterViewInit, Component, Input } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import Swiper, { Navigation, Autoplay, EffectCreative} from 'swiper';
Swiper.use([Navigation, Autoplay, EffectCreative]);

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
      effect: 'creative',
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, 0, -400],
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['100%', 0, 0],
        },
      },
      slidesPerView: 'auto',
      loop: true,
      speed: 400,
      spaceBetween: 100,
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
