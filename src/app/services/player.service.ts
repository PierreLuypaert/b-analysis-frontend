import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private serviceName = 'player';
  private apiUrl = environment.apiUrl + this.serviceName;

  constructor(private http: HttpClient) {}

  createPlayer(player: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, player);
  }

  getPlayers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }
}
