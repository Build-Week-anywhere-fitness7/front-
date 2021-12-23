import React, {useState} from 'react';
import axios from 'axios';
axios.get('/api/classes');

const AddClass=() => {
    const [workout, setWorkout] = useState({
        class_Id:"",
    })
    const onChange = (e) => {
        setWorkout({
            ...workout,[e.target.class_Id]: e.target.value,
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('')
            .then(res => {
                console.log(res)
            })
    }
    return(
        <form >
               <label>
                <h1>Choose Your Class</h1>
                    <select id="class_Id" onChange={onChange}>
                        <option>Choose Class</option>
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