import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from './work.model';

const API_SERVER = 'http://localhost:5000';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}

  cards: Work[] = [];
  authorization: string = localStorage.getItem('auth') || '';
  loginn!: boolean;//posivelmente tem que eliminar

  getAuthorizationToken(login: string, senha: string): Observable<string> {
    const url = API_SERVER + '/login/';
    const msgBody = { login: login, senha: senha };
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers: headers };
    const response = this.httpClient.post<string>(url, msgBody, options);
    return response;
  }

  setAuth(auth: string) {
    this.authorization = 'Bearer ' + auth;
    localStorage.setItem('auth', this.authorization);
    this.loginn = true;
  }

  limparAuth() {
    this.authorization = '';
    this.loginn = false;
  }
  
  getAllCards(): Observable<any> {
    const url = API_SERVER + '/cards/';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const res = this.httpClient.get<Work>(url, options);
    return res;
  }

  createNewCard(
    titulo: string,
    conteudo: string,
    lista: string
  ): Observable<any> {
    const url = API_SERVER + '/cards/';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    //console.log({ titulo, conteudo, lista });
    const response = this.httpClient.post(
      url,
      { titulo, conteudo, lista },
      options
    );
    return response;
  }

  changeCardById(
    id: string,
    titulo: string,
    conteudo: string,
    lista: string
  ): Observable<any> {
    const url = API_SERVER + '/cards/' + id;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const response = this.httpClient.put(
      url,
      { id, titulo, conteudo, lista },
      options
    );
    return response;
  }

  deleteCardById(id: string): Observable<any> {
    const url = API_SERVER + '/cards/' + id;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const response = this.httpClient.delete(url, options);
    return response;
  }
}
