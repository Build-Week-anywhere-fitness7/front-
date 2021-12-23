import { React, useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import { useHistory } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

const SignUp = () => {
  const [sign, setSign] = useState({
    "username": "",
    "password": "",
    "email": "",
    "role_type": null,
    "auth_code": ""
  })

const {push} = useHistory()
  const handleChange = (e)=> {
    setSign({
      ...sign,
      [e.target.name]: e.target.value
    });
  };
  
    const handleSubmit = (e) => {
      e.preventDefault();
       axiosWithAuth()
        .post("/api/auth/register", sign)
        .then((res)=>{
          localStorage.setItem('token', res.data.token);
        push('/class');
            
                })
    };
  return (
    <Form className="form-styling" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <Label>
        Username:
        <Input
          name="username"
          type="text"
          onChange={handleChange}
          value={sign.username}
        />
      </Label>

      <Label>
        Email:
        <Input
          name="email"
          type="email"
          onChange={handleChange}
          value={sign.email}
        />
      </Label>

      <Label>
        Password:
        <Input
          name="password"
          type="password"
          onChange={handleChange}
           value={sign.password}
        />
      </Label>

      <Label> Are you a client or Instructor?</Label>
      <select name="role_type">
        <option value="a">Client</option>
        <option value="b">Instructor</option>
      </select>
      <br />
      {SignUp.role_type === "b"&&
      <Label>
        Authenticate Code
        <Input
          name="auth"
          type="text"
          onChange={handleChange}
          value={sign.auth_code}
        />
      </Label>
}
      <Button>Sign Up</Button>
    </Form>
  );
};

export default SignUp;
