import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = '';

  constructor(private http: HttpClient) {
    this.configUrl = '/api/v1/';
    this.configUrl = 'https://api.sparkpost.com/api/v1/';
  }

  private setHeaders(headers: HttpHeaders ): object {
      var token = '8a0552653fce7ad6e4af3b900d0a28e89d78c3a0';
      headers = headers || new HttpHeaders();
      headers = headers.append('Access-Control-Allow-Origin', '*')
      headers = headers.append('Authorization', `${token}`)
      return { headers };
  }

  postData(url, params, headers?: HttpHeaders | null) {
    return this.http.post(this.configUrl + url, params, this.setHeaders(headers));
  }


}
