import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import './css/defaults.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
      <Switch>
        <Route exact path={["/"]}>
          <Search />
        </Route>
        <Route exact path={["/saved"]}>
          <Saved />
        </Route>
      </Switch>
      </div>
    </Router>
  )
}


export default App;
