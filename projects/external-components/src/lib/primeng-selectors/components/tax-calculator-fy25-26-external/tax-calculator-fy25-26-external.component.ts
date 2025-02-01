import { Component } from '@angular/core';
import { CommonExternalComponent } from '../common-external/common-external.component';

@Component({
  selector: 'app-tax-calculator-fy25-26',
  template: `
    <div class="tax-calculator">
      <h1>Tax Calculator FY 2025-26</h1>
      <label for="income">Enter Taxable Income (INR):</label>
      <input type="number" id="income" [(ngModel)]="taxableIncome" (input)="calculateTax()" />

      <div *ngIf="newRegimeTax !== null || oldRegimeTax !== null">
        <h2>Tax Calculation:</h2>
        <div [ngClass]="{'highlight': newRegimeTax < oldRegimeTax}">
          New Regime Tax: {{ newRegimeTax | currency:'INR':'symbol':'1.0-0' }}
        </div>
        <div [ngClass]="{'highlight': oldRegimeTax < newRegimeTax}">
          Old Regime Tax: {{ oldRegimeTax | currency:'INR':'symbol':'1.0-0' }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tax-calculator {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
    h1, h2 {
      text-align: center;
    }
    .highlight {
      color: green;
      font-weight: bold;
    }
    label {
      display: block;
      margin-bottom: 8px;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `]
})
export class TaxCalculatorFy2526Component extends CommonExternalComponent {
  taxableIncome: number = 0;
  newRegimeTax: number | null = null;
  oldRegimeTax: number | null = null;

  calculateTax() {
    this.newRegimeTax = this.calculateNewRegimeTax(this.taxableIncome);
    this.oldRegimeTax = this.calculateOldRegimeTax(this.taxableIncome);
  }

  private calculateNewRegimeTax(income: number): number {
    if (income <= 1250000) return 0;
    let tax = 0;
    if (income > 2400000) tax += (income - 2400000) * 0.30;
    if (income > 2000000) tax += 600000 * 0.25;
    if (income > 1600000) tax += 400000 * 0.20;
    if (income > 1200000) tax += 400000 * 0.15;
    if (income > 800000) tax += 400000 * 0.10;
    if (income > 400000) tax += 400000 * 0.05;
    return tax;
  }

  private calculateOldRegimeTax(income: number): number {
    let tax = 0;
    if (income > 1000000) tax += (income - 1000000) * 0.30;
    if (income > 500000) tax += 500000 * 0.20;
    if (income > 250000) tax += 250000 * 0.05;
    return tax;
  }
}