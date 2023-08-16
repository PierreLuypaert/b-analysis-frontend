import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private match: any;

  setMatch(match: any) {
    localStorage.setItem('match', JSON.stringify(match));
  }

  getMatch() {
    const objectString = localStorage.getItem('match');
    return objectString ? JSON.parse(objectString) : null;
  }
}
