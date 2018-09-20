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
    let result: number;

    switch(operacao){
      case(CalculatorService.SOMA):
        result = num1 + num2;
      break;
      case(CalculatorService.SUBTRACAO):
        result = num1 - num2;
      break;
      case(CalculatorService.DIVISAO):
        result = num1 / num2;
      break;
      case(CalculatorService.MULTIPLICACAO):
        result = num1 * num2;
      break;
      default:
        result = 0;
    }

    return result;
  }
}
