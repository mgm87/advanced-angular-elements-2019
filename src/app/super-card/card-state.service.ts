import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardStateService {
  shouldBark: Observable<boolean>;

  private shouldBarkSubject = new Subject<boolean>();

  constructor() {
    this.shouldBark = this.shouldBarkSubject.asObservable();
    this.shouldBarkSubject.pipe(delay(700)).subscribe((bark) => {
      if (bark) {
        this.shouldBarkSubject.next(false);
      }
    });
  }

  bark() {
    this.shouldBarkSubject.next(true);
  }
}
