import React from "react";
import "./App.css";
// Import React-Router to add route functionalites to the app
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import AddTinderCards from "./components/AddTinderCards";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/add">
            <AddTinderCards></AddTinderCards>
          </Route>
          <Route path="/">
            <TinderCards></TinderCards>
            <SwipeButtons></SwipeButtons>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
