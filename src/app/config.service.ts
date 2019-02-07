import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = '';

  constructor(private http: HttpClient) {
    this.configUrl = 'https://api.sparkpost.com/api/v1/';
  }

  private setHeaders(headers: HttpHeaders | null, type?): object {
      var token = btoa(parseInt('23') + ':' + 123);
      headers = headers || new HttpHeaders();
      headers = headers.set('Authorization', `Basic ${token}`)
      return { headers };
  }

  postData(url, params, type?, headers?: HttpHeaders | null) {
    return this.http.post(this.configUrl + url, params, this.setHeaders(headers, type));
  }


}
