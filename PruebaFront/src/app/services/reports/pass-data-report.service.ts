import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class PassDataReportService {

  private onChange: BehaviorSubject <any>;
  private passClick: BehaviorSubject <any>;
  private changeViewData: BehaviorSubject <any>;

  private pasData: BehaviorSubject <any>;

  constructor() {
    this.onChange = new BehaviorSubject<boolean> (null);
    this.passClick = new BehaviorSubject <any>(null);
    this.pasData = new BehaviorSubject <any>(null);
    this.changeViewData = new BehaviorSubject <any>(null);
  }

  getValue(): Observable<boolean> {
    return this.onChange.asObservable();
  }
  setValue(newValue): void {
    this.onChange.next(newValue);
  }


  getClick(): Observable<boolean> {
    return this.passClick.asObservable();
  }
  setClick(newValue): void {
    this.passClick.next(newValue);
  }


  getData(): Observable<boolean> {
    return this.passClick.asObservable();
  }
  setData(newValue): void {
    this.passClick.next(newValue);
  }


  getViewData(): Observable<boolean> {
    return this.changeViewData.asObservable();
  }
  setViewData(newValue): void {
    this.changeViewData.next(newValue);
  }
}
