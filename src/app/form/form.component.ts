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
  details: boolean;
  wirkungsGradPH: number;
  resultText: string;

  constructor() {
    this.werte = new Werte();
    this.werte.poolSize = this.content.poolSize;
    this.werte.pHWert = this.content.pHWert;
    this.werte.wirkungsGradGramm = this.content.wirkungsGradGramm;
    this.werte.wirkungsGradKubikmeter = this.content.wirkungsGradKubikmeter;
    this.ergebnis = null;
    this.details = false;
    this.wirkungsGradPH = null;
    this.resultText = null;
  }

  ngOnInit() {
    console.log(this.content);
  }

  berechnen() {

    if (this.werte.pHWert < 7.2) {
      this.resultText = 'Nimm pH-Plus!';
      this.wirkungsGradPH = 0.1;
      this.ergebnis = Math.round((this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter) * (7.2 - this.werte.pHWert) / this.wirkungsGradPH) + ' Gramm';
    }

    if (this.werte.pHWert > 7.4) {
      this.wirkungsGradPH = -0.1;
      this.resultText = 'Nimm pH-Minus!';
      this.ergebnis = Math.round(-1 * (this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter) * (this.werte.pHWert - 7.4) / this.wirkungsGradPH) + ' Gramm';
    }

    if (this.werte.pHWert >= 7.2 && this.werte.pHWert < 7.4) {
      this.wirkungsGradPH = null;
      this.resultText = null;
      this.ergebnis = 'pH-Wert ist super!';
    }

  }

    toggleDetails() {
        if (this.details === false) {
      this.details = true;
        } else {
      this.details = false;
    }
  }
}
