import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Articulo } from './articulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private apiUrl: string = environment.baseUrl + 'articulosDeRopa';
  constructor(private http: HttpClient) { }

  getArticulosDeRopa(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.apiUrl);
  }
}
