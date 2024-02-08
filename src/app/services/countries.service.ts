import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://restcountries.com/v3.1/';

  fetchClients(value: string = '') {
    if (value == '') {
      return this.http.get(this.baseUrl + '/all');
    } else {
      return this.http.get(this.baseUrl + `/name/${value}`);
    }
  }
}
