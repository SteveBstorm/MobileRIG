import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isConnected! : boolean
  constructor(private _authService : AuthService) {}

  ngOnInit() {
    this.isConnected = this._authService.isConnected
  }

  login() {
    this._authService.login('admin@test.com', 'admin1234=')
    this.isConnected = this._authService.isConnected

  }

  logout() {
    this._authService.logout()
    this.isConnected = this._authService.isConnected

  }
}
