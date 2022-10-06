import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIURL = "https://localhost:7159/api";

  constructor(private http:HttpClient) { }

  getDocList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Documents');
  }

  addDoc(val:any){
    return this.http.post(this.APIURL+'/Documents', val);
  }

  updateDoc(val:any){
    return this.http.put(this.APIURL+'/Documents', val);
  }

  deleteDoc(val:any){
    return this.http.delete(this.APIURL+'/Documents', val);
  }
}
