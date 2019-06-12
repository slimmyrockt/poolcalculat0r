import {Component, OnInit} from '@angular/core';
import {Werte} from '../models/werte';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  werte: Werte;
  content = require('../../assets/mydata.json');
  ergebnis: string;

  constructor() {
    this.werte = new Werte();
    this.werte.poolSize = this.content.poolSize;
    this.werte.pHWert = this.content.pHWert;
    this.werte.wirkungsGradGramm = this.content.wirkungsGradGramm;
    this.werte.wirkungsGradKubikmeter = this.content.wirkungsGradKubikmeter;
    this.werte.wirkungsGradPHWert = this.content.wirkungsGradPHWert;
    this.ergebnis = null;
  }

  ngOnInit() {
    console.log(this.content);
  }

  berechnen() {
    //TODO: plus / Minus erkennen und danach berechnen!
    if (this.werte.pHWert < 7.2 && this.werte.pHWert > 0 && this.werte.wirkungsGradPHWert > 0) {
      this.ergebnis = Math.round((this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter) * (7.2 - this.werte.pHWert) / this.werte.wirkungsGradPHWert) + ' Gramm';
    }

    if (this.werte.pHWert < 7.2 && this.werte.pHWert > 0 && this.werte.wirkungsGradPHWert < 0) {
      this.ergebnis = 'Du musst pH-Plus nehmen und den Wirkungsgrad vergleichen!';
    }

    if (this.werte.pHWert > 7.4 && this.werte.wirkungsGradPHWert < 0) {
      this.ergebnis = Math.round(-1 * (this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter) * (this.werte.pHWert - 7.4) / this.werte.wirkungsGradPHWert) + ' Gramm';
    }

    if (this.werte.pHWert > 7.4 && this.werte.wirkungsGradPHWert > 0) {
      this.ergebnis = 'Du musst pH-Minus nehmen und den Wirkungsgrad vergleichen!';
    }

    if (this.werte.pHWert >= 7.2 && this.werte.pHWert < 7.4) {
      this.ergebnis = 'pH-Wert ist super';
    }

  }
}
