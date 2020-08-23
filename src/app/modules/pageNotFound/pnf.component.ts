import { Component, OnInit } from '@angular/core';
import icons from 'glyphicons'

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './pnf.component.html',
  styleUrls: ['./pnf.component.css']
})
export class PageNotFoundComponent implements OnInit {

  public personDetail: any;

  constructor() {
    this.personDetail = {
      name: 'Adam',
      age: 58,
      bloodgroup: 'A+',
      gender: 'male'
    }
  }

  ngOnInit() {
  }

}
