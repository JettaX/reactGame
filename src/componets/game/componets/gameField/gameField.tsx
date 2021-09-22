import React from "react";
import { GameFieldProps } from "./interfaces";
import { Stats } from "./componets/stats/stats";
import { InteractiveField } from "./componets/interactiveField/interactiveField";

export class GameField extends React.Component<GameFieldProps, never> {
  constructor(props: GameFieldProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Stats player1={this.props.player1} player2={this.props.player2} />
        <InteractiveField
          signs={{
            playerOneSign: this.props.player1.symbol,
            playerTwoSign: this.props.player2.symbol,
          }}
        />
      </div>
    );
  }
}
