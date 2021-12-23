import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import axiosWithAuth from './utils/axiosWithAuth'

const initialFormValues = {
    class_Id: "",
}

const AddClass=() => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const {push} = usehistory()

    const postNewItem = newItem => {
        console.log("post Items=", newItem)
        axiosWithAuth().post('', newItem)
            .then(response => {
                console.log(response);
                push('/Class');
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }

    const submitItem = () => {
        const newItem = {
            class_Id: formValues.class_Id,
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
                <h1>Choose Your Class!!</h1>
                    <select id="class_Id" onChange={onChange}>
                        <option value="1">Morning Zen</option>
                        <option value="2">Boxing Basics</option>
                        <option value="3">Sunday Spinning</option>
                        <option value="4">Water Aerobics</option>
                        <option value="5">Bikram Yoga</option>
                    </select>
               </label>
            <button id="btn" onSubmit={onSubmit}>Add Class</button>
        </form>
    )
}


export default AddClass;