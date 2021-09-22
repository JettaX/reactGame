import React from "react";
import { GameSetting } from "./componets/gameSetting/gameSetting";
import { GameSettingsFormResult } from "./componets/gameSetting/interfaces";
import { GameState, Player } from "./interfaces";
import { GameField } from "./componets/gameField/gameField";
import { GameBase } from "./style";

const player1: Player = {
  name: "Bob",
  symbol: "X",
};

const player2: Player = {
  name: "Alice",
  symbol: "O",
};

const initialForm: GameSettingsFormResult = {
  player1: player1,
  player2: player2,
};

export class Game extends React.Component<never, GameState> {
  constructor(props: never) {
    super(props);
    this.state = {
      playerOne: initialForm.player1,
      playerTwo: initialForm.player2,
    };
    this.handler = this.handler.bind(this);
  }

  private handler(formResults: GameSettingsFormResult, actions: any) {
    const player1: Player = {
      name: formResults.player1.name,
      symbol: formResults.player1.symbol,
    };

    const player2: Player = {
      name: formResults.player2.name,
      symbol: formResults.player2.symbol,
    };

    this.setState({
      playerOne: player1,
      playerTwo: player2,
    });
    actions.setSubmitting(false);
  }

  render() {
    return (
      <GameBase>
        <GameSetting
          initialPlayers={initialForm}
          onSubmit={(settings, actions) => this.handler(settings, actions)}
        />
        <GameField
          player1={this.state.playerOne}
          player2={this.state.playerTwo}
        />
      </GameBase>
    );
  }
}
