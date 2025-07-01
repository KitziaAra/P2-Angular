import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-directivas',
  imports: [CommonModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  titulo:string = 'Lista de elementos';
lista =[
  {
    id:1,
    nombre:'elemento1',
    descripcion:'la descripcion'
  },
  {
    id:2,
    nombre:'elemento2',
    descripcion:'la descripcion'
  },
  {
    id:3,
    nombre:'elemento3',
    descripcion:'la descripcion'
  },
  {
    id:4,
    nombre:'elemento4',
    descripcion:'la descripcion'
  },
  {
    id:5,
    nombre:'elemento5',
    descripcion:'la descripcion'
  },

]
/*
listaCategorias :  Categoria []=[
  {
    id=1,
    nombreCategoria='Deportes',
    descripcionCategoria='Artículos Deportivos'
  }
]*/

}
