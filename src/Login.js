import React, { Component } from 'react';
const axios = require('axios');

class Login extends Component {

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async e => {
        e.preventDefault();
        var result = await axios.post("http://localhost:5000/login", this.state);
        console.log(result.data);
    }

    render() { return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name="username" placeholder="Username" onChange={this.changeHandler} required></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} required></input>
                </div>
                <button type="submit" class="login-btn">Login</button>
            </form>
        </div>
        );  }
}

export default Login;