import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  width: 200px;
  height: 30px;
  background-color: ${({ bg }) => bg || "white"};
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-weight: 700;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
  &:focus {
    color: white;
  }
  &:active {
    color: blue;
  }
`;
export const Content = styled.div`
  border: 1px solid #000;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  background-color: ${(props) => props.bg};
  align-items: center;
`;

export const Image = styled.img`
  width: vpw;
  height: vph;
  margin-left: 40px;
  padding: 20px;
`;

export const Flex = styled.div`
  border: 1px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  & > div,
  & > ul {
    flex: 1;
  }
`;
