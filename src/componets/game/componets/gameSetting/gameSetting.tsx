import React from "react";
import { Formik, Field, Form } from "formik";
import { GameSettingsFormProps } from "./interfaces";
import {
  SettingFieldSetInner,
  WrapperForm,
  SettingFieldSetMain, Button
} from "./style";

export class GameSetting extends React.Component<GameSettingsFormProps, never> {
  constructor(props: GameSettingsFormProps) {
    super(props);
  }

  render() {
    return (
      <Formik
        initialValues={this.props.initialPlayers}
        onSubmit={this.props.onSubmit}
      >
        <Form>
          <WrapperForm>
            <SettingFieldSetMain>
              <legend>Game setting</legend>
              <SettingFieldSetInner>
                <legend>Player 1</legend>
                <Field type="text" name="player1.name" />
                <Field name="player1.symbol" as="select">
                  <option>X</option>
                  <option>Y</option>
                  <option>O</option>
                </Field>
              </SettingFieldSetInner>
              <SettingFieldSetInner>
                <legend>Player 2</legend>
                <Field type="text" name="player2.name" />
                <Field name="player2.symbol" as="select">
                  <option>X</option>
                  <option>Y</option>
                  <option>O</option>
                </Field>
              </SettingFieldSetInner>
              <Button>Save</Button>
            </SettingFieldSetMain>
          </WrapperForm>
        </Form>
      </Formik>
    );
  }
}
