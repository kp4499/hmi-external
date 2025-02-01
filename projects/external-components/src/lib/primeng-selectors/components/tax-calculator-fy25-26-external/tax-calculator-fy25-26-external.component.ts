import { Component } from '@angular/core';
import { CommonExternalComponent } from '../common-external/common-external.component';

@Component({
  selector: 'app-tax-calculator-fy25-26',
  template: `
    <div class="tax-calculator">
      <h2>Tax Calculator FY 2025-26</h2>
      <label for="income">Enter Taxable Income (INR): </label>
      <input type="number" id="income" [(ngModel)]="taxableIncome" (input)="calculateTax()" />
      
      <div *ngIf="oldTax !== null && newTax !== null">
        <h3>Tax Calculation:</h3>
        <p [ngClass]="{'highlight': oldTax < newTax}">Old Regime Tax: {{ formatCurrency(oldTax) }}</p>
        <p [ngClass]="{'highlight': newTax < oldTax}">New Regime Tax: {{ formatCurrency(newTax) }}</p>
      </div>
    </div>
  `,
  styles: [
    `
    .tax-calculator {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .highlight {
      color: green;
      font-weight: bold;
    }
  `,
  ],
})
export class TaxCalculatorFy2526Component extends CommonExternalComponent {
  taxableIncome: number = 0;
  oldTax: number | null = null;
  newTax: number | null = null;

  calculateTax() {
    this.oldTax = this.calculateOldRegimeTax(this.taxableIncome);
    this.newTax = this.calculateNewRegimeTax(this.taxableIncome);
  }

  calculateOldRegimeTax(income: number): number {
    if (income <= 250000) return 0;
    else if (income <= 500000) return (income - 250000) * 0.05;
    else if (income <= 1000000) return 250000 * 0.05 + (income - 500000) * 0.2;
    else return 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
  }

  calculateNewRegimeTax(income: number): number {
    if (income <= 1275000) return 0; // considering 12.75L as nil
    if (income <= 475000) return 0; // considering 4L as nil
    else if (income <= 800000) return (income - 400000) * 0.05;
    else if (income <= 1200000) return 400000 * 0.05 + (income - 800000) * 0.1;
    else if (income <= 1600000)
      return 400000 * 0.05 + 400000 * 0.1 + (income - 1200000) * 0.15;
    else if (income <= 2000000)
      return (
        400000 * 0.05 + 400000 * 0.1 + 400000 * 0.15 + (income - 1600000) * 0.2
      );
    else if (income <= 2400000)
      return (
        400000 * 0.05 +
        400000 * 0.1 +
        400000 * 0.15 +
        400000 * 0.2 +
        (income - 2000000) * 0.25
      );
    else
      return (
        400000 * 0.05 +
        400000 * 0.1 +
        400000 * 0.15 +
        400000 * 0.2 +
        400000 * 0.25 +
        (income - 2400000) * 0.3
      );
  }

  formatCurrency(value: number): string {
    return '₹ ' + value.toLocaleString('en-IN', { minimumFractionDigits: 0 });
  }
}
