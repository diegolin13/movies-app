import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  buscarPelicula(text_term: HTMLInputElement) {
    const texto = text_term.value.trim();
    if(texto.length === 0) return;
    text_term.value = '';
    this.router.navigate(['/buscar', texto]);
  }

}
