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

  constructor() {
    this.werte = new Werte();
    this.werte.poolSize = this.content.poolSize;
    this.werte.wert2 = this.content.wert2;
    this.werte.wert3 = this.content.wert3;
  }

  ngOnInit() {
    console.log(this.content);
  }
}
