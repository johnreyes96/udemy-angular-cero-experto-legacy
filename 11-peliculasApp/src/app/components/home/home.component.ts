import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(private peliculasService: PeliculasService) {
    this.peliculasService.getCartelera()
        .subscribe((data: any) => this.cartelera = data);

    this.peliculasService.getPopulares()
        .subscribe((data: any) => this.populares = data);

    this.peliculasService.getPopularesNinos()
        .subscribe((data: any) => this.popularesNinos = data);
  }

  ngOnInit() {
  }

}
