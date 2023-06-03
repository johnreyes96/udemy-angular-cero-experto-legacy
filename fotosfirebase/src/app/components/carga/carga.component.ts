import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreElemento: boolean;
  archivos: FileItem[];

  constructor(public _cargaImagenes: CargaImagenesService) {
    this.estaSobreElemento = false;
    this.archivos = [];
  }

  ngOnInit() {
  }

  cargarImagenes(imagenes: FileItem[]) {
    this._cargaImagenes.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos(event) {
    this.archivos = [];
  }
}
