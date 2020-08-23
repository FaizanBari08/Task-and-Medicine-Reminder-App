import { Component, OnInit } from '@angular/core';
import icons from 'glyphicons'
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'user-account',
  templateUrl: './userAcc.component.html',
  styleUrls: ['./userAcc.component.css']
})
export class UserAccountComponent implements OnInit {

  public personDetail: any;

  constructor(private router:Router) {
    this.personDetail = {
      name: 'Adam',
      age: 58,
      bloodgp: 'A+',
      gender: 'male',
      phone: '9999999999',
      email: 'email.com'
    }
  }

  onLogout(){
    console.log('route to login again')
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
