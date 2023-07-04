import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = 'apikey';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  peliculas: any[];

  constructor(private http: HttpClient) {
    this.peliculas = [];
  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDate() }`;
    const hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDate() }`;
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }
                  &api_key=${ this.apikey }`;
    return this.http.jsonp(url, 'callback')
              .pipe(map( (res: any) => res.results));
  }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback')
              .pipe(map( (res: any) => res.results));
  }

  getPopularesNinos() {
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
    &api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback')
              .pipe(map( (res: any) => res.results));
  }

  buscarPelicula(texto: string) {
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(url, 'callback')
              .pipe(map( (res: any) => {
                this.peliculas = res.results;
                console.log(res.results);
                return res.results;
              }));
  }

  getPelicula(id: string) {
    const url = `${ this.urlMoviedb }/movie/${ id }?&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback')
              .pipe(map( (res: any) => res));
  }
}
