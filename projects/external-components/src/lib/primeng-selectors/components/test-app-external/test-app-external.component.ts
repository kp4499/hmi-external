import { Component } from '@angular/core';
import { CommonExternalComponent } from '../common-external/common-external.component';

@Component({
  selector: 'app-test-app',
  template: `
    <div style="text-align:center; margin-top: 50px; background-color: #f0f0f0; padding: 20px;">
      <h1>Temperature Converter</h1>
      <input type="number" [(ngModel)]="temperature" placeholder="Enter temperature" style="padding: 10px; width: 200px;"/>
      <select [(ngModel)]="unit" style="padding: 10px;">
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
      <button (click)="convert()" style="padding: 10px;">Convert</button>
      <h2 *ngIf="convertedTemperature !== null">
        Converted Temperature: {{ convertedTemperature }} {{ targetUnit }}
      </h2>
    </div>
  `,
  styles: [`
    h1 {
      color: #4CAF50;
    }
    input, select {
      margin: 10px;
    }
    button {
      background-color: #008CBA;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #005f73;
    }
  `]
})
export class TestAppComponent extends CommonExternalComponent {
  temperature: number = 0;
  unit: string = 'Celsius';
  convertedTemperature: number | null = null;
  targetUnit: string = '';

  convert() {
    if (this.unit === 'Celsius') {
      this.convertedTemperature = (this.temperature * 9/5) + 32;
      this.targetUnit = 'Fahrenheit';
    } else {
      this.convertedTemperature = (this.temperature - 32) * 5/9;
      this.targetUnit = 'Celsius';
    }
  }
}