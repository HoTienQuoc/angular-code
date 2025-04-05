import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-guess-the-number",
  imports: [CommonModule, FormsModule],
  templateUrl: "./guess-the-number.component.html",
  styleUrl: "./guess-the-number.component.scss",
})
export class GuessTheNumberComponent {
  secretNumber = this.generateRandomNumber();
  attemptsLeft = 10;
  guessedNumber?: number;
  feedbackMessage = "";
  gameOver = false;
  private static readonly MAX_NUMBER = 100;
  private static readonly MAX_ATTEMPTS = 10;

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
  public isValidGuess(guess?: number): boolean {
    return (
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessTheNumberComponent.MAX_NUMBER
    );
  }
  submitGuess(): void {
    if (!this.isValidGuess(this.guessedNumber)) {
      this.feedbackMessage = `Enter a number between 1 and ${GuessTheNumberComponent.MAX_NUMBER}.`;
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }
  private evaluateGuess(): void {
    if (this.guessedNumber === this.secretNumber) {
      this.endGame(true);
    } else if (this.attemptsLeft === 0) {
      this.endGame(false);
    } else {
      this.feedbackMessage =
        this.guessedNumber! > this.secretNumber
          ? "High. Try again"
          : `Low. Try again ${this.secretNumber}`;
    }
  }
  private endGame(isWin: boolean): void {
    this.gameOver = true;
    this.feedbackMessage = isWin ? "Congratulations!" : "Game over";
  }
  resetGame(): void {
    this.secretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessTheNumberComponent.MAX_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feedbackMessage = "";
    this.gameOver = false;
  }
}
