import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../src/routes/ProtectedRoute';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Living with Spina Bifida</h1>
                <div className="links">
                <Link to="/">Home</Link>
                {(isUserAuthenticated() === true ? null : <Link to="/register">Register</Link>)}
                {(isUserAuthenticated() === true ? <Link to="/login">Logout</Link> : <Link to="/login">Login</Link>)}
                <Link to="/profile">Profile</Link>
                <Link to="/support">Support</Link>
                </div>
        </nav>
    );
}

export default Navbar;