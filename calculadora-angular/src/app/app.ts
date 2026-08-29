import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  num1: number | null = null;
  num2: number | null = null;
  operador: string = '+';
  resultado: number | string = 0;
  historial: string[] = [];

  operar() {
    const n1 = this.num1 ?? 0;
    const n2 = this.num2 ?? 0;

    switch (this.operador) {
      case '+':
        this.resultado = n1 + n2;
        break;
      case '-':
        this.resultado = n1 - n2;
        break;
      case '*':
        this.resultado = n1 * n2;
        break;
      case '/':
        this.resultado = n2 !== 0 ? n1 / n2 : 'Error: división por 0';
        break;
      case '^':
        this.resultado = Math.pow(n1, n2);
        break;
      default:
        this.resultado = 0;
    }

    const operacion = `${n1} ${this.operador} ${n2} = ${this.resultado}`;
    this.historial.unshift(operacion);
  }
}