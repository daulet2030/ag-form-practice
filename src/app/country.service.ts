import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any[]> {
    return this.http.get<any[]>("/api/countries");
  }

  create(data: any): Observable<any> {
    return this.http.post<any>("/api/countries", data);
  }

  edit(data: any): Observable<any> {
    return this.http.put<any>("/api/countries", data);
  }
  get(id: any): Observable<any> {
    return this.http.get<any>("/api/countries/" + id);

  }

  delete(id: any) {
    return this.http.delete<any>("/api/countries/" + id);
  }

}
