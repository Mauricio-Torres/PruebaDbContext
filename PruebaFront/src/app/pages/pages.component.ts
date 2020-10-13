import { Component, OnInit } from '@angular/core';
import { fader, slider, stepper, transformer } from '../animations/route-animations';
// declare function init_plugin();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  animations: [
    // fader,
    slider,
    // transformer,
    // stepper
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // init_plugin();
  }

  prepareRoute(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
