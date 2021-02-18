import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Living with Spina Bifida</h1>
                <div className="links">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                </div>
        </nav>
    );
}

export default Navbar;