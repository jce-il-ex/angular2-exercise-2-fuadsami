import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  navButtons = [{id:1, txt:"Home"}, {id:2, txt:"Activities"}, {id:3, txt:"About Us"}, {id:4, txt:"Contact Us"}];

  constructor() { }

  ngOnInit() {
  }

}
