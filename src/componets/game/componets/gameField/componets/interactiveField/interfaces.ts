export interface InteractiveFieldState {
  array: string[];
  xIsNext: boolean;
  isWin: boolean;
  winnerIs: string;
}

export interface InteractiveFieldProps {
  signs: PlayersSign;
}

interface PlayersSign {
  playerOneSign: string;
  playerTwoSign: string;
}
