import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

const blinding = keyframes`
   0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const BaseCell = css`
  appearance: none;
  color: #f2cb05;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 3px white solid;
  background-color: #914bf2;
  box-shadow: none;

  &:hover:empty {
    animation: ${blinding} 1s ease infinite;
  }
`;

export const Style = styled.button`
  ${BaseCell};
`;
