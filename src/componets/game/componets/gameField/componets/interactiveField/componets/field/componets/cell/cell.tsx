import React from "react";
import { CellProps } from "./interfaces";
import { Style } from "./style";

export class Cell extends React.Component<CellProps> {
  render() {
    return (
      <Style onClick={this.props.onClick.bind(this)}>{this.props.sign}</Style>
    );
  }
}
