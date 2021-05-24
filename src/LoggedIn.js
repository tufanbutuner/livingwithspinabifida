import { useHistory } from 'react-router-dom';

function LoggedIn() {

    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        history.push('/login');
    }

    return (
        <div className="home">
            <h1>You are already logged in!</h1>
            <button onClick={logout}>Log out</button>
        </div>
    );
}

export default LoggedIn;