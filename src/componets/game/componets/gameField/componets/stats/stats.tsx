import React from "react";
import { StatsProps } from "./interfaces";
import { StatsWrapper } from "./statsItem";

export class Stats extends React.Component<StatsProps, any> {
  constructor(props: never) {
    super(props);
  }

  render() {
    return (
      <StatsWrapper>
        <p>
          {this.props.player1.name} is {this.props.player1.symbol}
        </p>
        <p>
          {this.props.player2.name} is {this.props.player2.symbol}
        </p>
      </StatsWrapper>
    );
  }
}
