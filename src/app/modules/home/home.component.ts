import { Component, OnInit } from '@angular/core';
// import { TaskReminderComponent } from './'
import icons from 'glyphicons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public title:string;

  constructor() {
    console.log('Logged to Home Component')
    this.title = 'Welcome Adam';
  }

  ngOnInit() {
  }

}
