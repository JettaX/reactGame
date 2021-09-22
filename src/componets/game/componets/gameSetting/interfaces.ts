export interface PlayerSettings {
  name: string;
  symbol: string;
}

export interface GameSettingsFormResult {
  player1: PlayerSettings;
  player2: PlayerSettings;
}

export interface GameSettingsFormProps {
  initialPlayers: GameSettingsFormResult;
  onSubmit: (settings: GameSettingsFormResult, actions: any) => void;
}
