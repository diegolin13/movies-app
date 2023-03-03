import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movies[] = [];
  constructor(private pelisService: PeliculasService) {}
  ngOnInit(): void {
    this.pelisService.getPeliculas()
        .subscribe(peliculas => {
          this.movies = peliculas.results;
        });
  }
}
