import { Route, Switch } from "react-router-dom";

import Feed from "../Feed";
import Landing from "../Landing";
import Login from "../Login";
import Profile from "../Profile";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../Register";
import Registered from "../Registered";
import Support from "../Support";
import UserList from "../UserList";
import { isUserAuthenticated } from "./ProtectedRoute";

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (isUserAuthenticated() === true ? <Feed /> : <Landing />)}
      />
      <Route exact path="/register" component={Register} />
      <Route path="/registered" component={Registered} />
      <Route path="/login" component={Login} />
      <Route path="/support" component={Support} />
      <ProtectedRoute path="/profile" component={Profile} />
      <ProtectedRoute path="/users" component={UserList} />
      <ProtectedRoute path="/" component={Feed} />
    </Switch>
  );
}

export default Routes;
