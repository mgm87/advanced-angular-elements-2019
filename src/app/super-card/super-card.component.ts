import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CardStateService } from './card-state.service';

@Component({
  selector: 'app-super-card',
  templateUrl: './super-card.component.html',
  styleUrls: ['./super-card.component.scss']
})
export class SuperCardComponent implements OnInit {
  @Input() title: string;
  @Input() imageSrc: string;

  @Input('titleImageSrc')
  set titleImageSrc(value: string) {
    this._titleImageSrc = `url(${value})`;
  }
  get titleImageSrc(): string {
    return this._titleImageSrc;
  }

  @Output() like = new EventEmitter<string>();
  @Output() share = new EventEmitter<string>();

  showMoreInfo = false;
  firstBark = false;
  bark: Observable<boolean>;

  private _titleImageSrc: string;

  constructor(private cardState: CardStateService) { }

  ngOnInit() {
    this.bark = this.cardState.shouldBark.pipe(delay(Math.random() * (1500 - 700) + 1000));
    this.bark.subscribe(() => {
      this.firstBark = false;
    })
  }

  likeClicked(title) {
    this.like.emit(title);
  }

  shareClicked(title) {
    this.share.emit(title);
  }

  toggleMoreInfo() {
    this.showMoreInfo = !this.showMoreInfo;
  }

  barkClicked() {
    this.firstBark = true;
    this.cardState.bark();
  }

}
