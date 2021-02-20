import React, { Component } from 'react';
const axios = require('axios');

class Register extends Component {
    constructor(props) {
        super(props)
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async e => {
        e.preventDefault();
        var result = await axios.post("http://localhost:5000/register", this.state);
        console.log(result.data);
    }

    render() { return (
            <div className="register">
                <h2>Register</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" placeholder="First name" name="firstName" onChange={this.changeHandler} required></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Surname" name="surname" onChange={this.changeHandler} required></input>
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="Username" onChange={this.changeHandler} required></input>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" onChange={this.changeHandler} required></input>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} required></input>
                    </div>
                    <button type="submit" class="register-btn">Register</button>
                </form>
            </div>
        );  }
}

export default Register;