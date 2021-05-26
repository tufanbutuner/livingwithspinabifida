import { Route, Redirect } from 'react-router-dom';

// Checking to see if user is authenticated by looking at localStorage, if the username is there, the user is authenticated
// if the localStorage is empty, there is no active session therefore the user is not authenticated
export const isUserAuthenticated = (...rest) => {
        return localStorage.getItem('username') !== null;
}

// Creating a protected route component where the props will be the components we want to protect
// if the user is not authenticated then it will redirect them to the login page
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      isUserAuthenticated() === true ? <Component {...props} /> : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
  )} />
)

export default ProtectedRoute;