import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qwe';
  menus=[]
  constructor() {
    this.menus.push('menu 1');
    this.menus.push('menu 2');
   }  
}
