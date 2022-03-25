import './App.css';
import { BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <Router>
         <Switch>
          <Route exact path="/*" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;