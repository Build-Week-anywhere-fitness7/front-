import React, { useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";


const Login = () => {
    const [login, setLogin] = useState({
        username:"",
        password:"",
    })
 const [error,setError] = useState()  
  const {push} = useHistory()
   

const handleChange = (e) => {
        setLogin({
            ...login,[e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth.post(`/api/auth/register`, login)
          .then(res => {
              if (res.data) {
               localStorage.setItem('token', res.data.token);
                push('/class');
              }
            })
           .catch(err => {
              if (err) {
              setError('username and password required')
               }
            });
    }


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
