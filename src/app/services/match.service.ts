import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private serviceName = 'match';
  private apiUrl = environment.apiUrl + this.serviceName;

  constructor(private http: HttpClient) {}

  /*createMatch(match: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, match);
  }*/
  createMatch(matchData: any): Observable<any> {
    const url = `${this.apiUrl}/create`; // Replace with your API endpoint

    return this.http.post(url, matchData);
  }

  getMatches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }


}
