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
  
}
