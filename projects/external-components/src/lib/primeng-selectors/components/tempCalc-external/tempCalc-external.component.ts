import { Component } from '@angular/core';
import { CommonExternalComponent } from '../common-external/common-external.component';

@Component({
  selector: 'app-temp-calc',
  template: `
    <div style="padding: 20px; text-align: center;">
      <h2 style="color: #333;">Temperature Converter</h2>
      <input type="number" [(ngModel)]="tempInput" placeholder="Enter temperature" 
             style="padding: 10px; margin: 10px;" />
      <select [(ngModel)]="unitFrom" style="padding: 10px; margin: 10px;">
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
        <option value="K">Kelvin</option>
      </select>
      <span style="font-size: 24px;"> to </span>
      <select [(ngModel)]="unitTo" style="padding: 10px; margin: 10px;">
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
        <option value="K">Kelvin</option>
      </select>
      <button (click)="convert()" style="padding: 10px 20px; margin: 10px;">Convert</button>
      <h3 style="color: #007BFF;">{{ convertedTemp }} {{ unitTo }}</h3>
    </div>
  `,
  styles: []
})
export class TempCalcComponent extends CommonExternalComponent {
  tempInput: number = 0;
  unitFrom: string = 'C';
  unitTo: string = 'C';
  convertedTemp: string = '';

  convert() {
    let temp: number;

    if (this.unitFrom === 'C') {
      temp = this.tempInput;
    } else if (this.unitFrom === 'F') {
      temp = (this.tempInput - 32) * 5 / 9;
    } else {
      temp = this.tempInput - 273.15;
    }

    if (this.unitTo === 'C') {
      this.convertedTemp = temp.toFixed(2);
    } else if (this.unitTo === 'F') {
      this.convertedTemp = (temp * 9 / 5 + 32).toFixed(2);
    } else {
      this.convertedTemp = (temp + 273.15).toFixed(2);
    }
  }
}