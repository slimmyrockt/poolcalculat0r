import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import localeDe from '@angular/common/locales/de';
import {registerLocaleData} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe, 'de');
  }
}
