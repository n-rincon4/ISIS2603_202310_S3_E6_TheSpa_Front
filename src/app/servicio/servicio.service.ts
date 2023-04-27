import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioDetail } from './servicio-detail';
import { environment } from 'src/environments/environment';
import { Servicio } from './servicio';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl: string = environment.baseUrl + 'servicios';

  constructor(private http: HttpClient) { }

  getServices(): Observable<ServicioDetail[]> {
    return this.http.get<ServicioDetail[]>(this.apiUrl);
  }

  getService(id: string): Observable<ServicioDetail> {
    return this.http.get<ServicioDetail>(this.apiUrl + "/" + id);
  }

}
