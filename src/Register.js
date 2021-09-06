import { useState } from "react";
const axios = require("axios");

const Register = () => {
  const [user, setUser] = useState({});

  const newUser = {
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
    password2: user.password2,
  };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    axios.post("/register", user).then((res) => console.log(res.data));
    console.log(user);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="Name"
            id="name"
            onChange={changeHandler}
            value={user.name}
            required
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={changeHandler}
            value={user.username}
            required
          ></input>
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
            required
          ></input>
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
            required
          ></input>
        </div>
        <div>
          <input
            type="password"
            id="password2"
            placeholder="Re-type Password"
            onChange={changeHandler}
            value={user.password2}
            required
          ></input>
        </div>
        <button type="submit" className="register-btn" onClick={submitHandler}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
