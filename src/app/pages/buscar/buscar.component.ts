import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{
  texto_busqueda : string = '';
  resultados : Movies[] = [];
  loading = true;

  constructor( private activatedRoute: ActivatedRoute, 
               private peliService: PeliculasService ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.texto_busqueda = params.texto;
      this.peliService.findMovie(params.texto).subscribe(resp => this.resultados = resp);
      this.loading = false;
    });
  }

}
