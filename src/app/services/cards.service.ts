import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
private baseurl="https://sheetdb.io/api/v1/q01sa5iowkoi7";
  constructor(private http:HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`)
  }
  public add(record: Cards): Observable<any> {
    return this.http.post<any>(`${this.baseurl}`, { data: record });

}
}
