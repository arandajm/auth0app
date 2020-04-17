import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  // auth is public to use it from  the html
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
