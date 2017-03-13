import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  myList = 
  [
    {
      txt: 'Adi'
    },
    {
      txt: 'Tayri'
    },
    {
      txt: 'Exercise'
    },
    {
      txt: '2'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
