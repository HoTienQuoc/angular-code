import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-game",
  imports: [CommonModule],
  templateUrl: "./game.component.html",
  styleUrl: "./game.component.scss",
})
export class GameComponent {
  choices = ["rock", "paper", "scissors"];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
  determineWinner(playerChoice: string, computerChoice: string): string {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  play(choice: string): void {
    this.playerChoice = choice;
    this.computerChoice =
      this.choices[this.getRandomNumber(this.choices.length)];
    this.result = this.determineWinner(choice, this.computerChoice);
  }
}
