import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ubicacion } from './ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiUrl: string = environment.baseUrl + 'ubicaciones';

constructor(private http: HttpClient) { }

getUbicaciones(): Observable<Ubicacion[]> {
  return this.http.get<Ubicacion[]>(this.apiUrl);
}

createUbicacion(ubicacion: Ubicacion): Observable<Ubicacion> {
  return this.http.post<Ubicacion>(this.apiUrl, ubicacion);
}

}
