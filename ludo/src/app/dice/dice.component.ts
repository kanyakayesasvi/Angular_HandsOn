import { Component } from '@angular/core';
import {EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  @Output() diceRoll = new EventEmitter<number>();

  rolling = false;

  rollDice() {
    // Prevent rolling the dice while it's already rolling
    if (this.rolling) {
      return;
    }

    // Start rolling the dice
    this.rolling = true;

    // Roll the dice after a short delay to simulate the dice animation
    setTimeout(() => {
      const diceValue = Math.floor(Math.random() * 6) + 1;
      this.diceRoll.emit(diceValue);

      // Stop rolling the dice after a short delay to simulate the dice animation
      setTimeout(() => {
        this.rolling = false;
      }, 500);
    }, 500);
  }
}


