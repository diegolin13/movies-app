import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
  ],
})
export class ComponentsModule { }
