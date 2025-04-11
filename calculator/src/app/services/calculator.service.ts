import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CalculatorService {
  private currentOperand: string = "";
  private previousOperand: string = "";
  private operator: string | null = null;

  constructor() {}
  private isOperator(value: string): boolean {
    return ["+", "-", "*", "/"].includes(value);
  }
  private clearCalculator(): void {
    this.currentOperand = "";
    this.clearOperation();
  }
  private clearOperation(): void {
    this.previousOperand = "";
    this.operator = null;
  }
  getDisplay(): string {
    const previous = this.previousOperand || "";
    const operator = this.operator || "";
    const current = this.currentOperand || "";
    return previous + operator + current;
  }
  private handleNumber(number: string): void {
    this.currentOperand += number;
  }
  private calculate(): void {
    if (!this.operator || !this.currentOperand || !this.previousOperand) return;
    const previousValue = parseFloat(this.previousOperand);
    const currentValue = parseFloat(this.currentOperand);
    let result = 0;
    switch (this.operator) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "*":
        result = previousValue * currentValue;
        break;
      case "/":
        result = currentValue === 0 ? NaN : previousValue / currentValue;
        break;
      default:
        return;
    }
    this.currentOperand = isNaN(result) ? "Error" : result.toString();
    this.clearOperation();
  }
  private handleOperator(operator: string): void {
    if (this.operator === "" && this.currentOperand === "") {
      return;
    }
    this.operator = operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  handleInput(input: string): void {
    if (this.isOperator(input)) {
      this.handleOperator(input);
    } else if (input === "C") {
      this.clearCalculator();
    } else if (input === "=") {
      this.calculate();
    } else {
      this.handleNumber(input);
    }
  }
}
