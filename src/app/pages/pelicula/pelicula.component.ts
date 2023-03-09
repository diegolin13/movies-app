import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public movie!: MovieResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private peliService: PeliculasService,
              private location: Location) {}

  ngOnInit(): void {
    const id_movie = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id_movie) return;
    this.peliService.movieById(id_movie).subscribe(resp => this.movie = resp); 
  }

  goBack(){
    this.location.back();
  }

}
