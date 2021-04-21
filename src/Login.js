import { useState } from 'react';
import { useHistory } from 'react-router';
import LoggedIn from './LoggedIn';
const axios = require('axios');

const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const token = sessionStorage.getItem('token');

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const submitHandler = async e => {
        e.preventDefault();
        var result = await axios.post("http://localhost:5000/login", user);
        console.log(result.data);
        if (result) {
            sessionStorage.setItem('token', JSON.stringify(result));
            history.push('/profile');
        }
    }
    
    return ( token ? <LoggedIn /> :
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