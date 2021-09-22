export interface GameState {
  playerOne: Player;
  playerTwo: Player;
}

export interface Player {
  name: string;
  symbol: string;
}
