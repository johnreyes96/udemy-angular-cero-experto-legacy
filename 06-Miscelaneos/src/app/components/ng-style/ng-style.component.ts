import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="'20'">
      Hola mundo... esta es una etiqueta
    </p>
    <div [ngStyle]="{
      'width.%': tamano,
      'height': '50px',
      'background-color': color,
      'color': 'white'
    }">{{ tamano }}</div>
    <br>

    <button class="btn btn-primary" (click)="tamano = tamano + 10; color = rojo">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 10; color = azul">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 100;
  color = 'black';
  azul = 'blue';
  rojo = 'red';

  constructor() {
    console.log(this.color);
    
  }

  ngOnInit() {
  }

}
