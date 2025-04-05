import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-stopwatch",
  imports: [CommonModule],
  templateUrl: "./stopwatch.component.html",
  styleUrl: "./stopwatch.component.scss",
})
export class StopwatchComponent {
  elapsedTime = 0;
  isRunning = false;
  intervalRef: any;
  startStop() {
    this.isRunning ? this.Stop() : this.Start();
  }
  private Start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1;
    }, 100);
    console.log("StopWatch started");
  }
  private Stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log("StopWatch stopped");
  }
  private Reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log("StopWatch stopped");
  }
}
