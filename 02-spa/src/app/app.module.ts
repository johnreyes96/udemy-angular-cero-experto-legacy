import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { HeroesComponent } from './shared/heroes/heroes.component';
import { HeroeComponent } from './shared/heroe/heroe.component';
import { BuscarComponent } from './shared/buscar/buscar.component';
import { HeroeTarjetaComponent } from './shared/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
