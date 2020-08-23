import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  isErr: boolean = false;
  errMsg: string = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    if(this.username=="adam" && this.password=="adam123")
      {
        console.log('login success')
        this.isErr = false;
        this.router.navigate(['home']);
      }
      else{
        console.log('login fail')
        this.isErr = true;
        this.errMsg = "Username or Password is incorrect";
      }
  }


}
