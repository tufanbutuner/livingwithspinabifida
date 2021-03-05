import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
