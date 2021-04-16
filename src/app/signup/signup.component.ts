import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupDataService } from '../signup-data.service';
import {SignUpModel } from './signup.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:String="SignUp";
  signupData = new SignUpModel(null,null,null,null,null);
  constructor(private signupDataServObj:SignupDataService, private route:Router) { }

  ngOnInit(): void {
  }
  newUser(){
    this.signupDataServObj.user(this.signupData);
    this.route.navigate(['login']);
  }
}
