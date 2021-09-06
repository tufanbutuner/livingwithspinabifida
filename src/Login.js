import LoggedIn from "./LoggedIn";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({});
  const username = localStorage.getItem("username");

  const existingUser = {
    username: "",
    password: "",
  };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // // sending an axios post to node /login endpoint
    // var result = await axios.post("/login", user);
    // var data = result.data;
    axios.post("/login", user).then((res) => console.log(res.data));
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={changeHandler}
            value={user.username}
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
        <button type="submit" className="login-btn" onClick={submitHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
