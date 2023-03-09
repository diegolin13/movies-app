import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent{
  @Input() movies: Movies[] = [];

  constructor(private router: Router) {}

  goToMovie(idMovie: number) {
    this.router.navigate(['/pelicula', idMovie]);
  }

}
