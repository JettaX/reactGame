import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Game } from "./game/game";
import { cx } from "@emotion/css";
import { LinkStyle } from "./style";
import { LoginScreen } from "./game/componets/login/LoginScreen";
import { UserScreen } from "./game/componets/login/UserScreen";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Router>
          <Link className={cx(LinkStyle)} to="/Game">
            Start
          </Link>
          <Link className={cx(LinkStyle)} to="/Login">
            Login
          </Link>
          <Switch>
            <Route path="/login" component={LoginScreen} />
            <Route path="/user/:name" component={UserScreen} />
            <Route path="/Game">
              <Game />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
