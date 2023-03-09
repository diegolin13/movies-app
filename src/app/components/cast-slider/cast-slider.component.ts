import { AfterViewInit, Component, Input } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.css']
})
export class CastSliderComponent implements AfterViewInit{
  @Input() cast: Cast[] = [];
  mySwiper?: Swiper;

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      slidesPerView: 4.3,
      freeMode: true,
      spaceBetween: 15,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        992: {
            spaceBetween: 20
          }
      },
    });
  }
  


}
