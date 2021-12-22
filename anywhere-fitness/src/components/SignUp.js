import React from "react";

const SignUp = () => {
    

    return(
        <form >
        <h3>Sign Up</h3>
        <label>
          Username 
          <input
            name="username"
            type="text"
            //onChange={handleChange}
            //value=
          />
        </label>
        
        <label>
          Email 
          <input
            name="email"
            type="email"
            //onChange={handleChange}
            //value=
          />
        </label>
        
        <label>
          Password 
          <input
            name="password"
            type="password"
            //onChange={handleChange}
           // value=
          />
        </label>

        <label>
          Client 
          <input
            name="client"
            type="radio"
           // onChange={handleChange}
            //value=
          />
        </label>
        <br />
        <label>
          Instructor 
          <input
            name="Instructor"
            type="radio"
            //onChange={handleChange}
            //value=
          />
        </label>
    
          <label>
            Authantic Code 
            <input
              name="auth"
              type="text"
              //onChange={handleChange}
              //value=
            />
          </label>
        <button>Sign Up</button>
      </form>
    );
  };

export default SignUp;



