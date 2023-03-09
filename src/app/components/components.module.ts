import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSliderComponent } from './cast-slider/cast-slider.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
    StarRatingComponent,
    CastSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
    StarRatingComponent,
    CastSliderComponent,
  ],
})
export class ComponentsModule { }
