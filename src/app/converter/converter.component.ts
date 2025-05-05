import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  inputValue: number = 0;
  result: number = 0;
  unit: string = '';

  convertToCelsius(): void {
    this.result = (this.inputValue - 32) * 5 / 9;
    this.unit = '°C';
  }

  convertToFahrenheit(): void {
    this.result = (this.inputValue * 9 / 5) + 32;
    this.unit = '°F';
  }

  convertToMeters(): void {
    this.result = this.inputValue / 3.28084;
    this.unit = 'm';
  }

  convertToFeet(): void {
    this.result = this.inputValue * 3.28084;
    this.unit = 'ft';
  }

}
