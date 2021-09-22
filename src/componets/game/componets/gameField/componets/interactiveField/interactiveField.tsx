import React from "react";
import { InteractiveFieldProps, InteractiveFieldState } from "./interfaces";
import { Field } from "./componets/field/field";
import { ScoreBoard } from "./componets/scoreBoard/scoreBoard";
import { Reset } from "./componets/reset/reset";
import { InteractField } from "./style";

export class InteractiveField extends React.Component<
  InteractiveFieldProps,
  InteractiveFieldState
> {
  constructor(props: InteractiveFieldProps) {
    super(props);
    this.state = {
      array: new Array(9).fill(""),
      xIsNext: true,
      isWin: false,
      winnerIs: "",
    };
  }

  private handleClick(position: number) {
    if (
      this.state.array[position] == this.props.signs.playerOneSign ||
      this.state.array[position] == this.props.signs.playerTwoSign ||
      this.state.isWin
    ) {
      return null;
    }
    const array = this.state.array.slice();
    array[position] = this.state.xIsNext
      ? this.props.signs.playerOneSign
      : this.props.signs.playerTwoSign;
    this.setState({
      array: array,
      xIsNext: !this.state.xIsNext,
    });
    this.whoIsWinner(array);
  }

  private whoIsWinner(array: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        this.setState({
          isWin: true,
          winnerIs: array[a],
        });
        return true;
      }
    }
    return false;
  }

  private resetClick() {
    this.setState({
      array: new Array(9).fill(""),
      xIsNext: true,
      isWin: false,
      winnerIs: "",
    });
  }

  render() {
    return (
      <InteractField>
        <ScoreBoard
          nextPlayer={
            this.state.xIsNext
              ? this.props.signs.playerOneSign
              : this.props.signs.playerTwoSign
          }
          playerWin={this.state.winnerIs}
          isWin={this.state.isWin}
        />
        <Field
          signs={this.props.signs}
          array={this.state.array}
          handleClick={(position) => this.handleClick(position)}
        />
        <Reset onClick={() => this.resetClick()} />
      </InteractField>
    );
  }
}
