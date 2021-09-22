import React from "react";
import { ScoreBoardProps } from "./interfaces";
import { Score } from "./style";

export class ScoreBoard extends React.Component<ScoreBoardProps, any> {
  constructor(props: ScoreBoardProps) {
    super(props);
  }

  private met() {
    if (this.props.isWin) {
      return this.props.playerWin + " win";
    }
    return "next " + this.props.nextPlayer;
  }

  render() {
    return <Score>{this.met()}</Score>;
  }
}
