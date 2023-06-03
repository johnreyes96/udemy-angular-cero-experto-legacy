import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { HeroesComponent } from './shared/heroes/heroes.component';
import { HeroeComponent } from './shared/heroe/heroe.component';
import { BuscarComponent } from './shared/buscar/buscar.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);