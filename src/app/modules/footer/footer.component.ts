import { Component, OnInit } from '@angular/core';
import icons from 'glyphicons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public detail;
  public icons;

  constructor() {
    this.icons = {
      contactIcon: icons.phone,
      emailIcon: icons.email
    }
    console.log(icons.heart)
    this.detail = {
      phone: 12341234512,
      email: "test.email.com"
    }
  }

  ngOnInit() {
  }

}
