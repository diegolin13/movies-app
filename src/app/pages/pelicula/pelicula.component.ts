import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public movie!: MovieResponse;
  public cast: Cast[] = [];
  public loading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private peliService: PeliculasService,
              private location: Location,
              private router: Router) {}

  ngOnInit(): void {
    const id_movie = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id_movie) return;
    this.peliService.movieById(id_movie).subscribe((resp) => {
      this.movie = resp;
      this.peliService.getMovieCast(id_movie).subscribe(resp => {
        this.cast = resp.filter(actor => actor.profile_path !== null);
        this.loading = false;
      });
    }, (err) => {
      this.router.navigate(['/home']);
      return;
    });
  }

  goBack(){
    this.location.back();
  }

}
