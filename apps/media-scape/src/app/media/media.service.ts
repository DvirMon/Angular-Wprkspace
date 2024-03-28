import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) { }
  
  public loadMedia() {
    const url = 'assets/dat.json'
    return this.http.get(url);
  }
}
