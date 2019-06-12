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

        if (this.werte.pHWert <= 7.4) {
            this.ergebnis = 'Nichts hinzugeben!';
        }

        if (this.werte.pHWert > 7.4) {

            this.ergebnis = Math.round((this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter) * (this.werte.pHWert - 7.4) / this.werte.wirkungsGradPHWert) + ' Gramm';

            console.log('Zuviel:' + (this.werte.pHWert - 7.4));
            console.log('Gramm um den PH-Wert um 0.1 zu senken:' + (this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter));
            console.log(this.werte.wirkungsGradKubikmeter);
            console.log(this.werte.wirkungsGradGramm);
            console.log(this.werte.poolSize);
            console.log((this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter) * (this.werte.pHWert - 7.4) / this.werte.wirkungsGradPHWert);
        }
    }
}
