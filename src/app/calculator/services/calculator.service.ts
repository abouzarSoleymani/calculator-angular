import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string):number{
    let resultado: number;

    switch(operacao){
      case(CalculatorService.SOMA):
        resultado = num1 + num2;
      break;
      case(CalculatorService.SUBTRACAO):
        resultado = num1 - num2;
      break;
      case(CalculatorService.DIVISAO):
        resultado = num1 / num2;
      break;
      case(CalculatorService.MULTIPLICACAO):
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
