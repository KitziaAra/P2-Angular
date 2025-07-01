import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { EventoService } from '../../service/evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventos-form',
  imports: [FormsModule],
  templateUrl: './eventos-form.component.html',
  styleUrl: './eventos-form.component.css'
})
export class EventosFormComponent implements OnInit {
  titulo : string = 'Eventos';
  evento : Evento = new Evento();

  constructor(private eventoService : EventoService,
    private router : Router,
    private activateRoute : ActivatedRoute
  ){}


  ngOnInit(): void {
    this.mostrarEvento();
  }

  mostrarEvento():void{
    this.activateRoute.params.subscribe(
      (params) => {
        let id = params['id'];
        if(id){
          this.eventoService.leerEvento(id).subscribe(
            (elEvento) => (this.evento = elEvento)
          )
        }
      }
    )
  }

  create():void{
    this.eventoService.crearEvento(this.evento).subscribe(
      (elEvento) =>{
        this.router.navigate(['/eventos']);
        Swal.fire('Nuevo Evento',
          `Evento ${this.evento.nombreEvento} creado satisfactoriamente`,
          'info'
        );
      }
    )
  }

}
