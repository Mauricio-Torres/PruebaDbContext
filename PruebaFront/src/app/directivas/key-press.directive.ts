import { Directive, HostListener } from '@angular/core';
import { PassDataReportService } from '../services/service.index';

@Directive({
  selector: '[appKeyPress]'
})
export class KeyPressDirective {

  constructor(private passDataReportService: PassDataReportService) { }

  @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      const x = event.keyCode;

      if (x === 13) {
        this.passDataReportService.setClick('enter');
      }
    }
}
