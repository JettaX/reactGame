import styled from "@emotion/styled";
import { css } from "@emotion/core";

const BaseInteractiveField = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InteractField = styled.div`
  ${BaseInteractiveField};
`;
