import React from "react";
import styled from "styled-components";

import { Button } from "./Home.style";

import { Content, Image, Flex } from "./Home.style";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Content bg="lightgray">
      <Flex>
        <div>
          <h1>Welcome to Anywhere Fitness</h1>

          <p>
            These days, fitness classes can be held anywhere- a park, an
            unfinished basement or a garage- not just at a traditional gym.
            Certified fitness instructors need an easy way to take the
            awkwardness out of attendance taking and client payment processing
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <Image src="./images/fitness3.jpg" alt="" />
      </Flex>

      <Link to="/class/add">
        <Button bg="coral">Sign Up for Classes!</Button>
      </Link>

      <Flex>
        <div>
          <h4>Address</h4>
          <p>
            1234 Somewhere Road #5432 Nashville, TN 00000 United States of
            America
          </p>
        </div>

        <div>
          <h4>Phone</h4>
          <Link to="">1-(615) 555-5555</Link>
        </div>

        <div>
          <h4>Email</h4>
          <Link to="">anywhere@fitness.com</Link>
        </div>
      </Flex>
    </Content>
  );
};

export default Home;
