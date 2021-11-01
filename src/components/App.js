import "./App.css";
import "../stylesheets/Animations.css";
import EntryPage from "./EntryPage/EntryPage";
import Choices from "./Choices/Choices";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={EntryPage} />
          <Route exact path="/choices" component={Choices} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
