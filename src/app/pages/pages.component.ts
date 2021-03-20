import { Component, OnInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})

export class PagesComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor( private iconLibraries: NbIconLibraries) { 
    this.iconLibraries.registerFontPack('fa', {packClass: 'fa', iconClassPrefix: 'fa' }); 
    this.iconLibraries.registerFontPack('fas', {packClass: 'fas', iconClassPrefix: 'fa' }); 
    this.iconLibraries.registerFontPack('fad', { packClass: 'fad', iconClassPrefix: 'fa' }); 
    this.iconLibraries.registerFontPack('fal', { packClass: 'fal', iconClassPrefix: 'fa' }); 
    this.iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' }); 
  }

  ngOnInit() {
    if (window['dataLayer']) {
      window['dataLayer'].push({'event': 'optimize.activate'});
    }
  }
}
