import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import axiosWithAuth from './utils/axiosWithAuth'

const initialFormValues = {
    class_name: "",
    class_type_name: "",
    class_time: "",
    duration: "",
    intensity: "",
    location: "",
    current_number_registrants: "",
    max_class_size: ""
}

const initialFormErrors = {
    name: "",
}

const initialDisabled = true

const AddClass=() => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const {push} = usehistory()

    const postNewItem = newItem => {

    }

    const submitItem = () => {
        const newItem = {
            class_name: formValues.class_name,
            class_type_name: formValues.class_type_name,
            class_time: formValues.class_time,
            duration: formValues.duration,
            intensity: formValues.intensity,
            location: formValues.location,
            current_number_registrants: formValues.current_number_registrants,
            max_class_size: formValues.max_class_size
        }
        postNewItem(newItem)
    }
    const onSubmit = event => {
        event.preventDefault()
        submitItem()
    }
    
    const onChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    return(
        <form >
               <label>
               Class Name
               <input
               name="class_name"
               value={formValues.class_name}
               onChange={onChange}

               />
               </label>
               <label>
               Class Type
               <input
               name="class_type_name"
               value={formValues.class_type_name}
               onChange={onChange}

               />
               </label>
              
               <label>
               Class Time
               <input
               name="class_time"
               value={formValues.class_time}
               onChange={onChange}

               />
               </label>
               <label>
               Class Duration
               <input
               name="duration"
               value={formValues.duration}
               onChange={onChange}

               />
               </label>
               <label>
               Intensity Level
               <input
               name="intensity"
               value={formValues.intensity}
               onChange={onChange}

               />
               </label>
               <label>
               Class Location
               <input
               name="location"
               value={formValues.location}
               onChange={onChange}

               />
               </label>
             
              <label>
              Current Number Registrants
               <input
               name="current_number_registrants"
               value={formValues.current_number_registrants}
               onChange={onChange}

               />
               </label>

                 <label>
                 Max Class Size
               <input
               name="max_class_size"
               value={formValues.max_class_size}
               onChange={onChange}

               />               
               </label>
            <button
            onSubmit={onSubmit}
            >Add Class</button>
           </form>

    )
}


export default AddClass;