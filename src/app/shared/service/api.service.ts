  import {Injectable} from '@angular/core';
  import {HttpClient, HttpHeaders} from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class ApiService {
     private URL_BASE_WEATHER: string = 'http://api.openweathermap.org/data/2.5/weather';
     private URL_BASE_USER: string = 'https://api.agify.io';

    constructor(private http: HttpClient) {

    }

    get(path: string) {
      return this.http.get(this.URL_BASE_WEATHER + path, {headers: this.setHeaders()});
    }

    getUser(path: string) {
      let url = this.URL_BASE_USER + path;
      console.log('REST GET calling: ' + url);
      return this.http.get(url, {headers: this.setHeaders()});
    }

    delete(path: string) {
      return this.http.delete(this.URL_BASE_WEATHER + path, {headers: this.setHeaders()});
    }

    post(path: string, body: any) {
      return this.http.post(this.URL_BASE_WEATHER + path, JSON.stringify(body), {headers: this.setHeaders()});
    }

    patch(path: string, body: any) {
      return this.http.patch(this.URL_BASE_WEATHER + path, JSON.stringify(body), {headers: this.setHeaders()});
    }

    private setHeaders(): HttpHeaders {
      const headersConfig = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
      };

      return new HttpHeaders(headersConfig);
    }

  }
