import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void { }

}
