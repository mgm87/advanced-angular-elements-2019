import { Component, OnInit, Input } from '@angular/core';

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

  private _titleImageSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
