interface PlayerSettings {
  name: string;
  symbol: string;
}

export interface GameFieldProps {
  player1: PlayerSettings;
  player2: PlayerSettings;
}
