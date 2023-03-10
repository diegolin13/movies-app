import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { CarteleraResponse, Movies } from '../interfaces/cartelera-response';
import {map, tap} from 'rxjs/operators';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: 'f875e36d1e360cf55fb4cd67b11a51b6',
      language: 'es-ES',
      page: this.carteleraPage
    }
  }

  getPeliculas(): Observable<Movies[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params,
    }).pipe(
      map((resp) => resp.results),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );
  }


  findMovie(text_param: string): Observable<Movies[]> {

    const params = {...this.params, page: 1, query: text_param}

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map((resp) => resp.results)
    )
  }

  movieById(id_movie: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id_movie}`, {
      params: this.params
    })

  }

  getMovieCast(id_movie: string): Observable<Cast[]>{
    const {page, ...params} = this.params;
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id_movie}/credits`, {
      params
    }).pipe(
      map(resp => resp.cast)
    );
  }

  resetCartelera() {
    this.carteleraPage = 1;
  }
}
