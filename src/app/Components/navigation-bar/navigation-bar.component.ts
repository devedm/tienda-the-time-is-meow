import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }
  
  ngOnInit(): void {
  }

}
