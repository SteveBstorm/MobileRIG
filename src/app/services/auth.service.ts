import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/toto/toto.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = "https://localhost:44338/api/"
  isConnected! : boolean
  constructor(private _client : HttpClient) { }

  login(email :string, pwd : string) {
    this._client.post<any>(this.url+"auth", {email : email, password : pwd}).subscribe({
      next : (data : any) => {
        localStorage.setItem('token', data.token)
        this.isConnected = true
      }
    })
  }

  logout() {
    this.isConnected = false
    localStorage.clear()
  }

  getAll() : Observable<User[]> {
    //let myheaders : HttpHeaders = new HttpHeaders().set('authorization', 'bearer '+ localStorage.getItem('token'))
    return this._client.get<User[]>(this.url+"auth"/*, {headers : myheaders}*/)
  }

  getPokemon() : Observable<any> {
    return this._client.get<any>('https://pokeapi.co/api/v2/pokemon')
  }
}
