import { Component, inject, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { EventoService } from '../../service/evento.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evento',
  imports: [CommonModule,RouterLink],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent implements OnInit{
  titulo : string = 'Listado de Eventos';
  listaDeEventos : Evento[]=[
    {
      idEvento:1,
      nombreEvento : 'Expo Escom',
      duracionEvento: 2,
      fechaEvento : new  Date()
    },
     {
      idEvento:3,
      nombreEvento : 'Ley Olimpia 1',
      duracionEvento: 1,
      fechaEvento : new  Date()
    },

  ];

  constructor(private eventoService : EventoService){}
  httpClient  = inject (HttpClient);

  ngOnInit(): void {
    this.eventoService.mostrasEventos().subscribe(
      (losEventos) => (this.listaDeEventos = losEventos)
    )
  }

  delete(evento : Evento):void{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     this.eventoService.eliminarEvento(evento.idEvento)
    .subscribe(
      (respuesta) => this.eventoService.mostrasEventos()
      .subscribe(
        (losEventos) => (this.listaDeEventos =losEventos)
      )
    )
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});




  }

}
