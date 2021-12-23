import React, { useState } from "react";

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
    <form>
      <label>
        Class Name
        <input
          name="class_name"
          //value=
          //onChange={handleChange}
        />
      </label>
      <label>
        Class Type
        <input
          name="class_type_name"
          //value=
          //onChange={handleChange}
        />
      </label>

      <label>
        Class Time
        <input
          name="class_time"
          // value=
          //onChange={handleChange}
        />
      </label>
      <label>
        Class Duration
        <input
          name="duration"
          //value=
          //onChange={handleChange}
        />
      </label>
      <label>
        Intensity Level
        <input
          name="intensity"
          //value=
          // onChange={handleChange}
        />
      </label>
      <label>
        Class Location
        <input
          name="location"
          //value=
          // onChange={handleChange}
        />
      </label>

      <label>
        Current Number Registrants
        <input
          name="current_number_registrants"
          //value=
          //onChange={handleChange}
        />
      </label>

      <label>
        Max Class Size
        <input
          name="max_class_size"
          //value=
          //onChange={handleChange}
        />
      </label>
      <button>Add Class</button>
    </form>
  );
};

export default AddClass;
