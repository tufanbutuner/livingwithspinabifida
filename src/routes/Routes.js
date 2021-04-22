import { Switch, Route } from "react-router-dom";
import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';
import Landing from '../Landing';
import Dashboard from '../Dashboard';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
    )
}

export default Routes;