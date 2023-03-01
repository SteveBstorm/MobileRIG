import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.scss']
})
export class TotoComponent {
  liste! : User[]
  pokedex! : any
  constructor(
    private _service : AuthService,
    private _ar : ActivatedRoute
    ){}

  ngOnInit() {
    this.pokedex = this._ar.snapshot.data["monObjet"]
    // this._service.getPokemon().subscribe({
    //   next : (data : any) => this.pokedex = data
    // })
    this._service.getAll().pipe(delay(2000)).subscribe({
      next : (data : User[]) => this.liste = data
    })
  }

  getList() {
    this._service.getAll().subscribe({
      next : (data : any[]) => this.liste = data
    })
  }
}

export interface User {
  id : number
  nickName : string
  email : string
  role : string
}
