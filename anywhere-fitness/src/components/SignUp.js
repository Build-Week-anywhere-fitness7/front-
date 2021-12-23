import React from "react";
import { Button, Form, Input, Label } from "reactstrap";

const SignUp = () => {
  return (
    <Form className="form-styling">
      <h3>Sign Up</h3>
      <Label>
        Username:
        <Input
          name="username"
          type="text"
          //onChange={handleChange}
          //value=
        />
      </Label>

      <Label>
        Email:
        <Input
          name="email"
          type="email"
          //onChange={handleChange}
          //value=
        />
      </Label>

      <Label>
        Password:
        <Input
          name="password"
          type="password"
          //onChange={handleChange}
          // value=
        />
      </Label>

      <Label> Are you a client or Instructor?</Label>
      <select name="client">
        <option value="a">Client</option>
        <option value="b">Instructor</option>
      </select>
      <br />
      <Label>
        Authenticate Code
        <Input
          name="auth"
          type="text"
          //onChange={handleChange}
          //value=
        />
      </Label>
      <Button>Sign Up</Button>
    </Form>
  );
};

export default SignUp;
