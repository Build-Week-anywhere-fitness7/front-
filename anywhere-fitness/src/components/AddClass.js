import React, { useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import {useHistory} from  'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";


const AddClass = (props) => {
  
  const {push} =useHistory();
  
  const [item, setItem] = useState({
    class_name: "Weights",
    class_duration: "1 Hour",
    max_class_size: 20,
    class_date: "2021-11-17",
    start_time: "08:00:00",
    class_location: "Weights Gym",
    class_instructor: 1,
    intensity_id: 1,
    type_id: 1,
    type_description: "yoga",
    number_registered: 1

  })
  

    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name]:e.target.value
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/classes/add', item)
        .then(resp=> {
            console.log(resp);
            push('/classes')
        })
        .catch(err=> {
            console.log(err);
        })
     
    }
  
  return (
    <Form onSubmit={handleSubmit} className="form-styling">
      <Label>
        Class Name
        <br />
        <input
          name="class_name"
          value={item.class_name}
          onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Class Type
        <Input
          name="type_description"
          value={item.type_description}
          onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Class Time
        <br />
        <input
          name="start_time"
           value={item.start_time}
          onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Class Duration
        <br />
        <input
          name="class_duration"
          value={item.class_duration}
          onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Intensity Level
        <br />
        <Input
          name="intensity_id"
          value={item.intensity_id}
          onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        Class Location
        <br />
        <input
          name="class_location"
          value={item.class_location}
           onChange={handleChange}
        />
      </Label>
      <br />

      <Label>
        Current Number Registrants
        <br />
        <input
          name="number_registered"
          value={item.number_registered}
          onChange={handleChange}
        />
      </Label>
      <br />
      <Label>
        <br />
        Max Class Size
        <Input
          name="max_class_size"
          value={item.max_class_size}
          onChange={handleChange}
        />
      </Label>
      <br />
      <Button>Add Class</Button>
    </Form>
  );
  }

export default AddClass;
