import React from "react";
import { Cell } from "./componets/cell/cell";
import { Style } from "./style";
import { FieldProps } from "./interfaces";

export class Field extends React.Component<FieldProps, {}> {
  constructor(props: FieldProps) {
    super(props);
  }

  render() {
    let nextPosition = 2;
    const lol = (position: number) => {
      nextPosition += 3;
      return <br key={position} />;
    };

    return (
      <Style>
        {this.props.array.map((sign, position) => [
          <Cell
            sign={sign}
            key={position}
            onClick={() => this.props.handleClick(position)}
          />,
          nextPosition === position ? lol(position) : null,
        ])}
      </Style>
    );
  }
}
