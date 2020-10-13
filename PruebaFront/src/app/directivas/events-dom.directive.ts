import { Directive, HostListener, ElementRef } from '@angular/core';
import { UsuarioService } from '../services/service.index';

@Directive({
  selector: '[appEventsdom]'
})
export class EventsdomDirective {

  constructor(private service: UsuarioService, private el: ElementRef) { }

  @HostListener('window:beforeunload', [ '$event' ]) unloadHandler(event) {

    this.service.logout();
  }



}
