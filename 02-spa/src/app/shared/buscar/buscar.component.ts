import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  termino: string;
  heroes: Heroe[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(this.termino);
    });
  }

  verHeroe( index: number ) {
    this.router.navigate(['/heroe', index]);
  }
}
