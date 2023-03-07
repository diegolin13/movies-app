import { Component, OnInit, HostListener } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movies[] = [];
  moviesSlides: Movies[] = [];
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      if (this.pelisService.cargando) return;
      this.pelisService.getPeliculas().subscribe( (resp: Movies[])  => {
        this.movies.push(...resp);
      });
    }
  }
  constructor(private pelisService: PeliculasService) {}
  ngOnInit(): void {
    this.pelisService.getPeliculas()
        .subscribe(peliculas => {
          this.movies = peliculas;
          this.moviesSlides = peliculas;
        });
  }
}
