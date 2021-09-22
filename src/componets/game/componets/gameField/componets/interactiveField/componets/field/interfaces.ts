export interface FieldProps {
  signs: PlayersSign;
  array: string[];
  handleClick: (position: number) => void;
}

interface PlayersSign {
  playerOneSign: string;
  playerTwoSign: string;
}
