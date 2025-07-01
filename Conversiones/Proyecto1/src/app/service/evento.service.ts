import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../model/evento';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private endPoint : string = 'http://localhost:8082/apiEventos/eventos';

  private httpHeaders = new HttpHeaders(
    {
      ContentType : 'application/json'
    }
  )

  constructor(private http : HttpClient) { }

  mostrasEventos(): Observable<Evento[]>{
    return this.http.get(this.endPoint).pipe(
      map( (respuesta) => respuesta as Evento[])
    )
  }

   leerEvento(id : number): Observable<Evento>{
    return this.http.get<Evento>(`${this.endPoint}/${id}`) ;
  }

   crearEvento(evento : Evento): Observable<Evento>{
    return this.http.post<Evento>(
      this.endPoint,
      evento,
      {headers : this.httpHeaders}
    ) ;
  }


   eliminarEvento(id : number): Observable<Evento>{
    return this.http.delete<Evento>(
      `${this.endPoint}/${id}`,
      {headers : this.httpHeaders}
    ) ;
  }


   actualizarEvento(evento : Evento): Observable<Evento>{
    return this.http.put<Evento>(
      `${this.endPoint}/${evento.idEvento}`,
      evento,
      {headers : this.httpHeaders}
    ) ;
  }

}
