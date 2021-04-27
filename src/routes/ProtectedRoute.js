import { Route, Redirect } from 'react-router-dom';

// Checking to see if user is authenticated by looking at sessionStorage, if there is a token, the user is authenticated
// if the sessionStorage is empty, there is no active session therefore the user is not authenticated
export const isUserAuthenticated = (...rest) => {
        return localStorage.getItem('username') !== null;
}

// Explain this code
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      isUserAuthenticated() === true ? <Component {...props} /> : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )

  export default ProtectedRoute;