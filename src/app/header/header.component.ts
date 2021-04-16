import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupDataService } from '../signup-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public signupDataServObj:SignupDataService, private route:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('token');
    this.route.navigate([''])
  }
}
