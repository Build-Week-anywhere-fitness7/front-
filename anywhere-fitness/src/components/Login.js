




import React, { useState } from "react";


const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  //const [error,setError] = useState()

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios.post(, login)
    // .then(res => {
    //if (res.data) {
    // localStorage.setItem('token', res.data.token);
    //  push();
    // }
    //})
    //.catch(err => {
    //if (err) {
    // setError('Invalid user. Please check your login information.')
    // }
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>Username:</label>
      <input
        name="username"
        type="text"
        placeholder="Username"
        onChange={handleChange}
        value={login.username}
      />
      <label>
        Password:
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={login.password}
        />
      </label>
      <p id="error"></p>
      <button>Log In</button>
    </form>
  );
};

export default Login;
