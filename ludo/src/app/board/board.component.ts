import { Token } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

//   positions = Array(40).fill(null).map((_, i) => i);
//   tokens: Token[] = [
//      Token('red', -1),
//     new Token('red', -1),
//     new Token('red', -1),
//     new Token('red', -1),
//     new Token('blue', -1),
//     new Token('blue', -1),
//     new Token('blue', -1),
//     new Token('blue', -1),
//     new Token('green', -1),
//     new Token('green', -1),
//     new Token('green', -1),
//     new Token('green', -1),
//     new Token('yellow', -1),
//     new Token('yellow', -1),
//     new Token('yellow', -1),
//     new Token('yellow', -1),
//   ];
//   activePlayerColor = 'red';

//   onDiceRoll(value: number) {
//     const activePlayerTokens = this.tokens.filter(token => token.color === this.activePlayerColor);

//     if (activePlayerTokens.some(token => token.position === -1)) {
//       // If the active player has any tokens in the starting area, move the first token onto the board
//       const firstTokenIndex = activePlayerTokens.findIndex(token => token.position === -1);
//       activePlayerTokens[firstTokenIndex].position = this.getStartingPosition(this.activePlayerColor);
//     } else {
//       // Otherwise, move the first token that can be moved by the value of the dice roll
//       const movableTokens = activePlayerTokens.filter(token => this.isTokenMovable(token, value));
//       if (movableTokens.length === 0) {
//         // If there are no movable tokens, switch to the next player
//         this.switchPlayer();
//         return;
//       }
//       const tokenToMove = movableTokens[0];
//       tokenToMove.position += value;
//       if (this.isTokenAtEnd(tokenToMove)) {
//         // ...

//       // If the token reaches the end of the track, remove it from the game and check for a winner
//       this.removeTokenFromGame(tokenToMove);
//       if (this.checkForWinner()) {
//         alert(`${this.activePlayerColor} wins!`);
//         return;
//       }
//     }

//     this.switchPlayer();
//   }

//   getTileClass(position: number) {
//     const row = Math.floor(position / 10);
//     const col = position % 10;
//     const colorClass = this.getColorClass(position);
//     let tileClass = 'tile';
//     if (row === 0 && col !== 0) {
//       tileClass += ` ${colorClass}`;
//     } else if (row === 1 && col === 9) {
//       tileClass += ` ${colorClass}`;
//     } else if (row === 4 && col !== 9) {
//       tileClass += ` ${colorClass}`;
//     } else if (row === 3 && col === 0) {
//       tileClass += ` ${colorClass}`;
//     }
//     return tileClass;
//   }

//   getColorClass(position: number) {
//     if (position < 10) {
//       return 'tile-red';
//     } else if (position < 20) {
//       return 'tile-blue';
//     } else if (position < 30) {
//       return 'tile-green';
//     } else if (position < 40) {
//       return 'tile-yellow';
//     }
//   }

//   getTokensOnTile(position: number) {
//     return this.tokens.filter(token => token.position === position);
//   }

//   isTokenMovable(token: Token, value: number) {
//     if (token.position === -1) {
//       return false;
//     }
//     const destination = token.position + value;
//     if (destination > 39) {
//       return false;
//     }
//     const tokensOnDestination = this.getTokensOnTile(destination);
//     if (tokensOnDestination.length === 1 && tokensOnDestination[0].color !== token.color) {
//       // The destination is occupied by an opponent's token
//       return true;
//     } else if (tokensOnDestination.length <= 1) {
//       // The destination is empty or occupied by a token of the same color
//       return true;
//     } else {
//       // The destination is occupied by two or more tokens
//       return false;
//     }
//   }

//   isTokenAtEnd(token: Token) {
//     if (token.position === -1) {
//       return false;
//     }
//     const row = Math.floor(token.position / 10);
//     const col = token.position % 10;
//     if (row === 0 && col === 5) {
//       return true;
//     } else if (row === 1 && col === 4) {
//       return true;
//     } else if (row === 4 && col === 5) {
//       return true;
//     } else if (row === 3 && col === 6) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   getStartingPosition(color: string) {
//     switch (color) {
//       case 'red':
//         return 0;
//       case 'blue':
//         return 10;
//       case 'green':
//         return 20;
//       case 'yellow':
//         return 30;
//     }
//   }

//   switchPlayer() {
//     switch (this.activePlayerColor) {
//       case 'red':
//         this.activePlayerColor = 'blue';
//         break;
//       case 'blue':
//         this.activePlayerColor = 'green';
//         break;
//       case 'green':
//         this.activePlayerColor = 'yellow';
//         break;
//       case 'yellow':
//         this.activePlayerColor = 'red';
//         break;
//     }
//   }

//   removeTokenFromGame(tokenToRemove: Token) {
//     const index = this.tokens.indexOf(tokenToRemove);
//     if (index > -1) {
//       this.tokens.splice(index, 1);
//     }
//   }

//   checkForWinner() {
//     return this.tokens.every(token => this.isTokenAtEnd(token));
//   }
// }
//   function getColorClass(position: any, number: any) {
//     throw new Error('Function not implemented.');
//   }

}
