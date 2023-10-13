import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService {

  constructor(private http: HttpClient) { }

 postCours(formData: any){
  return this.http.post('http://127.0.0.1:8000/api/cours',formData)
 }

 postInscrire(tab:any):Observable<any>
  {
  return this.http.post<any>('http://127.0.0.1:8000/api/inscris',tab);
 }
 
}
