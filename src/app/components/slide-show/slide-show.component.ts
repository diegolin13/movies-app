import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  @Input() movies: Movies[] = [];

  ngOnInit() {
    console.log('en el side show')
    console.log(this.movies);
  }

}
