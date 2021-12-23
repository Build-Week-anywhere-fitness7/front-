import React, { useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";

const AddClass = (props) => {
  const [item, setItem] = useState({
    name: "",
    class_type_name: "",
    start_time: "",
    duration: "",
    intensity: "",
    location: "",
    current_number_registrants: "",
    max_class_size: "",
  });

  return (
    <Form className="form-styling">
      <Label>
        Class Name
        <br />
        <input
          name="class_name"
          //value=
          //onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Class Type
        <Input
          name="class_type_name"
          //value=
          //onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Class Time
        <br />
        <input
          name="class_time"
          // value=
          //onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Class Duration
        <br />
        <input
          name="duration"
          //value=
          //onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Intensity Level
        <br />
        <Input
          name="intensity"
          //value=
          // onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Class Location
        <br />
        <input
          name="location"
          //value=
          // onChange={handleChange}
        />
      </Label>
      <br />

      <Label>
        Current Number Registrants
        <br />
        <input
          name="current_number_registrants"
          //value=
          //onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        <br />
        Max Class Size
        <Input
          name="max_class_size"
          //value=
          //onChange={handleChange}
        />
      </Label>
      <br />
      <Button>Add Class</Button>
    </Form>
  );
};

export default AddClass;
