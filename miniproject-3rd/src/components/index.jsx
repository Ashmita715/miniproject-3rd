import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import login from "./components/login";
import register from "./components/register";
import About from "./components/About";

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/Home">Home</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/About">About</Link>
      </div>

      <hr />

      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/" component={login}/>
          
        
        <Route path="/register">
          <register />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));