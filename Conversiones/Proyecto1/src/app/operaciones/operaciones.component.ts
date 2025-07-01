import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operaciones',
  imports: [
    FormsModule
  ],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {

  numeroUno: number = 0;
  numeroDos: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = (this.numeroUno + this.numeroDos);
    Swal.fire({
      title: "Operación Sumar",
      text: "el resultado es" +this.resultado,
      icon: "info"
    });
  }

  restar(): void {
    this.resultado = (this.numeroUno - this.numeroDos);
  }

  multiplicar(): void {
    this.resultado = (this.numeroUno * this.numeroDos);
  }

  dividir(): void {
    this.resultado = (this.numeroUno / this.numeroDos);
  }

}
