import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { SuperCardComponent } from './super-card/super-card.component';

@NgModule({
  declarations: [
    SuperCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  entryComponents: [SuperCardComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(SuperCardComponent, { injector });
    customElements.define('super-card', customElement);
  }

  ngDoBootstrap() { }
}
