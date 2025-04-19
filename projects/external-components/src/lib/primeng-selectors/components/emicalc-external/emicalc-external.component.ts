import { Component } from '@angular/core';
import { CommonExternalComponent } from '../common-external/common-external.component';

@Component({
  selector: 'app-emicalc',
  template: `
    <div style="padding: 20px; max-width: 400px; margin: auto; background-color: lightgray;">
      <h2 style="text-align: center; color: black;">EMI Calculator</h2>
      <form (ngSubmit)="calculateEMI()" #emiForm="ngForm">
        <div style="margin-bottom: 15px;">
          <label for="loanAmount" style="color: black;">Loan Amount:</label>
          <input type="number" id="loanAmount" [(ngModel)]="loanAmount" name="loanAmount" required style="width: 100%; padding: 8px;" />
        </div>
        <div style="margin-bottom: 15px;">
          <label for="interestRate" style="color: black;">Interest Rate (% per annum):</label>
          <input type="number" id="interestRate" [(ngModel)]="interestRate" name="interestRate" required style="width: 100%; padding: 8px;" />
        </div>
        <div style="margin-bottom: 15px;">
          <label for="tenure" style="color: black;">Tenure (in months):</label>
          <input type="number" id="tenure" [(ngModel)]="tenure" name="tenure" required style="width: 100%; padding: 8px;" />
        </div>
        <button type="submit" style="width: 100%; padding: 10px; background-color: #28a745; color: white; border: none;">Calculate EMI</button>
      </form>
      <div *ngIf="emi" style="margin-top: 20px; text-align: center;">
        <h3 style="color: black;">Monthly EMI: {{ emi | currency }}</h3>
      </div>
    </div>
  `,
  styles: []
})
export class EmicalcComponent extends CommonExternalComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  tenure: number = 0;
  emi: number | null = null;

  calculateEMI(): void {
    const monthlyInterestRate = this.interestRate / 12 / 100;
    this.emi = (this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.tenure)) /
               (Math.pow(1 + monthlyInterestRate, this.tenure) - 1);
  }
}