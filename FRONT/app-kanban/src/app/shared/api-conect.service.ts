import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from './work.model'; 
const URL_API = "http://localhost:5000/";//REST_API_SERVER

@Injectable({
  providedIn: 'root'
})
export class ApiConectService {//APIService

  constructor(public httpClient: HttpClient) {//private

   }
   autorization!:string;
   getToken():Observable<any>{//autenticação
     const url = URL_API + '/login/';
     const msgBody = {login: 'letscode', senha: 'lets@123'};
     const headers = {'Content-Type':'application/json'};
     const options = { headers:headers};
     const response = this.httpClient.post<string>(url, msgBody, options);
     return response
   }

  createNewWork(work: Work){   //new card o work
    const url = URL_API + '/cards/';
    const headers = {'Content-Type':'application/json',
                      Autorization: this.autorization};
    const options = { headers:headers};
    const response = this.httpClient.post(url, work, options);// work es un objeto con el cuerpo de la tarjeta
    return response
  }

  getAllCards():Observable<any>{
    const url = URL_API + '/cards/';
    const headers = {'Content-Type':'application/json',
                      Autorization: this.autorization};
    const options = { headers:headers};
    const response = this.httpClient.get<Work>(url, options);// work es un objeto con el cuerpo de la tarjeta
    return response;
  }

}
