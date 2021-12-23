import {React, useState } from "react";
import { useNavigate } from "react-router";

const Class = () => {
const [item, setItem] = useState({
    class_id: 1,
    class_name: "Morning Zen",
    class_duration: "1 hour",
    max_class_size: 15,
    class_date: "2021-11-17T05:00:00.000Z",
    start_time: "08:00:00",
    class_location: "Central Park",
    instructor: "tom",
    intensity_level: "beginner",
    type_description: "yoga",
    number_registered: 2
  
    
      })
  

  return (

    
            <div >
                
                        <div className="box">
                        <div key={item.class_id}  >
                            <h4>Class name: {item.class_name}</h4> 
                            <p>Instructor name: {item.instructor}</p>
                            <p>Class date: {item.class_date}</p>
                            <p>Class time: {item.start_time}</p>
                            <p>Class Duration: {item.class_duration}</p>
                            <p>Class Location: {item.class_location}</p>
                            <p>Class Intensity: {item.intensity_level}</p>
                            <p>Currently enrolled in class: {item.number_registered}</p>
                            <p>Max class Participants: {item.max_class_size}</p>

                        </div>
                        </div>
                    )
                
    
            </div>
        )
    }


export default Class;