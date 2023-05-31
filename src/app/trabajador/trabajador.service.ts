import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Trabajador } from './trabajador';
import { TrabajadorDetail } from './trabajador-detail';


@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private apiUrl: string = environment.baseUrl + 'trabajadores';

  constructor(private http: HttpClient) { }

  getTrabajadores(): Observable<Trabajador[]>{
    return this.http.get<Trabajador[]>(this.apiUrl);
  }

  getTrabajador(id: number): Observable<TrabajadorDetail>{
    return this.http.get<TrabajadorDetail>(this.apiUrl + '/' + id);
  }

}
