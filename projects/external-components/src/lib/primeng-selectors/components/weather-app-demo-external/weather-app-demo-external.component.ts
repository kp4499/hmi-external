import { Component } from '@angular/core';
import { CommonExternalComponent } from '../common-external/common-external.component';

@Component({
  selector: 'weather-app-demo',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h1 style="color: #4CAF50;">Weather App Demo</h1>
      <button style="background-color: #008CBA; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border: none; border-radius: 5px;">
        Get Weather
      </button>
    </div>
  `,
  styles: []
})
export class WeatherAppDemoComponent extends CommonExternalComponent {}