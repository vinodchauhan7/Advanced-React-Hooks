import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import ReducerHook from "./component/reducerHook";
import ContextHook from "./component/contextHook";
import LayoutEffectHook from "./component/LayoutEffectHook";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Advance React hooks</h1>

      <Router>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <div>
                <h5>DashBoard</h5>
                <Link to="/useReducer">useReducer</Link>
                <br />
                <br />
                <Link to="/useContext">useContext</Link>
                <br />
                <br />
                <Link to="/useLayoutEffect">useLayoutEffect</Link>
              </div>
            );
          }}
        />

        {/** use Reducer path */}
        <Route path="/useReducer" exact component={ReducerHook} />

        {/** use Context */}
        <Route path="/useContext" exact component={ContextHook} />

        {/** use Context */}
        <Route path="/useLayoutEffect" exact component={LayoutEffectHook} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
