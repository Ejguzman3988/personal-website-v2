import "./App.css";
import "../stylesheets/Animations.css";
import "../stylesheets/Variables.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  NavBar,
  Info,
  Journey,
  Resume,
  Projects,
  Choices,
  EntryPage,
} from "./Import";

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
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
