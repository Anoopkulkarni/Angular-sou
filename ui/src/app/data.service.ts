import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  fetchPaymentLinks(){
    return this.http.get("http://localhost:3000/fetchPaymentLinks/plink_HmCucQlsEA4Neo");
  }
  
}
