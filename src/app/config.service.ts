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
      var token = '637974fe9fc30bdc031b900df437bc1b5ee28c99';
      headers = headers || new HttpHeaders();
      headers = headers.append('Access-Control-Allow-Origin', '*')
      headers = headers.append('Authorization', `Basic ${token}`)
      return { headers };
  }

  postData(url, params, type?, headers?: HttpHeaders | null) {
    return this.http.post(this.configUrl + url, params, this.setHeaders(headers, type));
  }

  createAuthHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa('user-name:password')); 
  }

  post(url, data) {
    // let headers = new Headers();
    // this.createAuthHeader(headers);
    return this.http.post('https://api.sparkpost.com/api/v1/transmissions', data, {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Authorization' : 'Basic 637974fe9fc30bdc031b900df437bc1b5ee28c99'
      })
    });
  }


}
