import React from "react";
import { ResetProps } from "./interfaces";
import { Button } from "../../../../../gameSetting/style";

export class Reset extends React.Component<ResetProps, never> {
  render() {
    return <Button onClick={this.props.onClick}>New Game</Button>;
  }
}
