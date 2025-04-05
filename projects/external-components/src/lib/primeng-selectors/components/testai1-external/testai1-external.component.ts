import { Component } from '@angular/core';
import { CommonExternalComponent } from '../common-external/common-external.component';

@Component({
  selector: 'app-testai1',
  template: `
    <div style="padding: 20px; border: 1px solid #ccc;">
      <h2 style="color: #333;">EMI Calculator</h2>
      <label for="amount" style="display: block; margin-bottom: 5px;">Loan Amount:</label>
      <input id="amount" type="number" [(ngModel)]="loanAmount" style="width: 100%; padding: 8px; margin-bottom: 10px;" />

      <label for="interest" style="display: block; margin-bottom: 5px;">Interest Rate (%):</label>
      <input id="interest" type="number" [(ngModel)]="interestRate" style="width: 100%; padding: 8px; margin-bottom: 10px;" />

      <label for="term" style="display: block; margin-bottom: 5px;">Loan Term (Years):</label>
      <input id="term" type="number" [(ngModel)]="loanTerm" style="width: 100%; padding: 8px; margin-bottom: 10px;" />

      <button (click)="calculateEMI()" style="padding: 10px 15px; background-color: #007bff; color: white; border: none; cursor: pointer;">Calculate EMI</button>

      <div *ngIf="emi" style="margin-top: 20px; font-weight: bold;">
        Your Monthly EMI is: {{ emi | currency }}
      </div>
    </div>
  `,
  styles: []
})
export class Testai1Component extends CommonExternalComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTerm: number = 0;
  emi: number | null = null;

  calculateEMI() {
    const monthlyInterest = this.interestRate / 12 / 100;
    const numberOfMonths = this.loanTerm * 12;
    this.emi = (this.loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfMonths)) /
               (Math.pow(1 + monthlyInterest, numberOfMonths) - 1);
  }
}