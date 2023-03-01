import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeResolver implements Resolve<any> {
  constructor(private _MonSuperService : AuthService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._MonSuperService.getPokemon().pipe(tap(() => this._MonSuperService.isConnected = false))
  }
}
