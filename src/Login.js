import { useState } from 'react';
import { useHistory } from 'react-router';
import LoggedIn from './LoggedIn';
const axios = require('axios');

const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const username = localStorage.getItem('username');

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const submitHandler = async e => {
        e.preventDefault();
        var result = await axios.post("http://localhost:5000/login", user);
        if (result) {
            localStorage.setItem('username', result.data.username);
            history.push('/profile');
        }
    }
    
    return ( username ? <LoggedIn /> :
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="username" placeholder="Username" onChange={changeHandler} required></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={changeHandler} required></input>
                </div>
                <button type="submit" className="login-btn" onClick={submitHandler}>Login</button>
            </form>
        </div>
    );
}

export default Login;