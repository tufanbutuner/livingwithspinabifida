import { useState } from 'react';
import { useHistory } from 'react-router';
const axios = require('axios');

const Register = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const token = sessionStorage.getItem('token');

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const submitHandler = async e => {
        e.preventDefault();
        var result = await axios.post("http://localhost:5000/register", user);
        console.log(result.data);
        if (result) {
            sessionStorage.setItem('token', JSON.stringify(result));
            history.push('/profile');
        }
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" placeholder="First name" name="firstName" onChange={changeHandler} required></input>
                </div>
                <div>
                    <input type="text" placeholder="Surname" name="surname" onChange={changeHandler} required></input>
                </div>
                <div>
                    <input type="text" name="username" placeholder="Username" onChange={changeHandler} required></input>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={changeHandler} required></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={changeHandler} required></input>
                </div>
                <button type="submit" className="register-btn">Register</button>
            </form>
        </div>
    )
}

export default Register;