import React, { useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";

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
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Label>Username:</Label>
      <Input
        name="username"
        type="text"
        placeholder="Username"
        onChange={handleChange}
        value={login.username}
      />
      <Label>
        Password:
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={login.password}
        />
      </Label>
      <p id="error"></p>
      <Button>Log In</Button>
    </Form>
  );
};

export default Login;
