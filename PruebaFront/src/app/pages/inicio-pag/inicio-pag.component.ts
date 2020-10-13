import { Component, OnInit } from '@angular/core';
declare function init_plugin();

@Component({
  selector: 'app-inicio-pag',
  templateUrl: './inicio-pag.component.html',
  styleUrls: ['./inicio-pag.component.css']
})


export class InicioPagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugin();

  }

}
