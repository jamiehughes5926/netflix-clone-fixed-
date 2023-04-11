import React from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        <Switch>
          {!user ? (
            <Route path="/">
              <LoginScreen />
            </Route>
          ) : (
            <Route path="/">
              <Homescreen />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
