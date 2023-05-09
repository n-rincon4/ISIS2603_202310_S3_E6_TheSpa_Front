import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicioExtra } from './servicioExtra';
import { ServicioExtraDetail } from './servicioExtra-detail';

@Injectable({
  providedIn: 'root'
})

export class ServicioExtraService {

  private apiUrl: string = environment.baseUrl + 'serviciosExtra';

  constructor(private http: HttpClient) { }

  getServices(): Observable<ServicioExtra[]> {
    return this.http.get<ServicioExtra[]>(this.apiUrl);
  }

  getService(id: string): Observable<ServicioExtraDetail> {
    return this.http.get<ServicioExtraDetail>(this.apiUrl + "/" + id);
  }

  createService(servicioExtra: ServicioExtra): Observable<ServicioExtra> {
    return this.http.post<ServicioExtra>(this.apiUrl, servicioExtra);
  }

}
