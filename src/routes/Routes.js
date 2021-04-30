import { Switch, Route } from "react-router-dom";
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';
import Landing from '../Landing';
import ProtectedRoute from './ProtectedRoute';
import { isUserAuthenticated } from './ProtectedRoute';
import LoggedIn from "../LoggedIn";
import Feed from "../Feed";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" render={() => (isUserAuthenticated() === true ? <Feed /> : <Landing />)} />
            <Route path="/register" render={() => (isUserAuthenticated() === true ? <LoggedIn /> : <Register />)} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/profile" component={Profile}/>
            <ProtectedRoute path="/" component={Feed} />
        </Switch>
    )
}

export default Routes;