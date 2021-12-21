import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/LoginForm";
import SignUp from "./components/SignUp";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: inline-block;
  background-color: #deb887;
  width: 100%;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 85%;
  font-size: 7rem;
`;

const StyledLogin = styled.div`
  margin: 0 4rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #d3d3d3;
  }
`;

const StyledRegister = styled.div`
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #d3d3d3;
  }
`;

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <header className="App-header">
          <Link to="/">
            <h1>Anywhere Fitness</h1>
          </Link>
          <div className="nav-links">
            <StyledLinks>
              <StyledLogin>
                <Link to="/login">Sign In</Link>
              </StyledLogin>
              <StyledRegister>
                <Link to="/signup">Register</Link>
              </StyledRegister>
            </StyledLinks>
          </div>
        </header>
      </StyledHeader>
      <div>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </div>
    </div>
  );
}

export default App;
