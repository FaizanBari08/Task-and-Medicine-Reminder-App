import { Component, OnInit, Input } from '@angular/core';
import icons from 'glyphicons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public title: string;
  public icons;

  constructor() {
    this.title = 'Health Care App';
    this.icons = {
      userIcon: icons.clipboard
    }
  }

  ngOnInit() {
  }

}
