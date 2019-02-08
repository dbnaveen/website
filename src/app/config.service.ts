import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = '';

  constructor(private http: HttpClient) {
    this.configUrl = '/api/v1/';
  }

  private setHeaders(headers: HttpHeaders ): object {
      var token = '637974fe9fc30bdc031b900df437bc1b5ee28c99';
      headers = headers || new HttpHeaders();
      headers = headers.append('Access-Control-Allow-Origin', '*')
      headers = headers.append('Authorization', `${token}`)
      return { headers };
  }

  postData(url, params, headers?: HttpHeaders | null) {
    return this.http.post(this.configUrl + url, params, this.setHeaders(headers));
  }


}
