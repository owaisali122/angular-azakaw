import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  apiUrl = `${environment.baseUrlHttps}`;
  private userToken: string;

  constructor(private httpClient: HttpClient) { }

  getFeeds(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}posts`);
  }

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}users`);
  }
  get token(): string {
    this.userToken = localStorage.getItem('userToke');
    return this.userToken;
  }

  set setToke(newToken: string) {
    localStorage.setItem('userToke', newToken);
    this.userToken = newToken;
  }

  resetToke() {
    localStorage.setItem('userToke', '');
    this.userToken = '';
  }
}
