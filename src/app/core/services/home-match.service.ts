import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeMatch } from '../models/HomeMatch';

@Injectable({
  providedIn: 'root',
})
export class HomeMatchService {
  url: string = environment.homeMtachServiceUrl;

  constructor(private http: HttpClient) {}

  getHomeMatch(): Observable<HomeMatch[]> {
    return this.http.get<HomeMatch[]>(this.url, { withCredentials: true });
  }
}
