import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Form = css`
  display: flex;
  height: auto;
`;

const FieldSetInner = css`
  display: flex;
`;

const FieldSetMain = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const DefaultButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  border: 2px #f2b705 solid;
  background-color: #f2cb05;
  cursor: pointer;
`;

export const WrapperForm = styled.div`
  ${Form};
`;

export const SettingFieldSetInner = styled.fieldset`
  ${FieldSetInner};
`;

export const SettingFieldSetMain = styled.fieldset`
  ${FieldSetMain};
`;

export const Button = styled.button`
  ${DefaultButton};
`;
