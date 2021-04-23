import { Switch, Route } from "react-router-dom";
import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';
import Landing from '../Landing';
import Dashboard from '../Dashboard';
import ProtectedRoute from './ProtectedRoute';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/profile" component={Profile}/>
            <ProtectedRoute path="/" component={Dashboard} />
          </Switch>
    )
}

export default Routes;