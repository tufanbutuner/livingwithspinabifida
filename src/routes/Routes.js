import { Switch, Route } from "react-router-dom";
import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </Switch>
    )
}

export default Routes;