import "./App.css";
import "../stylesheets/Animations.css";
import "../stylesheets/Variables.css";
import EntryPage from "./EntryPage/EntryPage";
import Choices from "./Choices/Choices";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Info from "./Info/Info";
import Journey from "./Journey/Journey";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={EntryPage} />
          <Route exact path="/choices" component={Choices} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/journey" component={Journey} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
