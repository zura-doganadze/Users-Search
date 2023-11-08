import React from "react";
import styled from "styled-components";
import AddImg from "../Images/Registration/add_a_photo_icon.svg";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Registration(props) {
  const navigate = useNavigate();

  return (
    <RegistrationWrapper>
      <RegistrationContainer>
        <h1>get started</h1>
        <AddSpan>add a photo</AddSpan>
        <ImgContainer>
          <input type="file" onChange={props.getFile} />
          {props.file ? (
            <img src={props.file} alt="img" />
          ) : (
            <img src={AddImg} alt="img" />
          )}
          {/* <img src={props.file} alt="img" /> */}
        </ImgContainer>
        <NameSpan>fill in your name</NameSpan>
        <div>
          <Input
            type="text"
            placeholder="your name"
            value={props.names}
            onChange={props.handleNameChange}
          />
        </div>
        <Button
          onClick={
            (props.handleButtonClick,
            () => navigate("/Form", { state: { key: "value" } }))
          }
        >
          sign in
        </Button>
      </RegistrationContainer>
    </RegistrationWrapper>
  );
}
export default Registration;

const RegistrationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
`;
const RegistrationContainer = styled.div`
  max-width: 794px;
  width: 100%;
  border-radius: 25px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #000;
    font-size: 64px;
    text-transform: capitalize;
    margin-top: 62px;
  }
`;

const AddSpan = styled.span`
  color: #000;
  font-size: 36px;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #e6ebff;

  input {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #e6ebff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    opacity: 0;
    z-index: 99;
    position: absolute;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const NameSpan = styled.span`
  color: #000;
  font-size: 36px;
`;
const Input = styled.input`
  color: #a5a5a5;
  font-size: 36px;
  background: #e6ebff;
  padding: 29px;
  margin: 33px 0 37px 0;
  border: none;
`;
const Button = styled.button`
  color: #fff;
  font-size: 24px;
  padding: 25px 132px;
  background-color: #4980c0;
  border-radius: 42px;
  border: none;
  cursor: pointer;
  margin-bottom: 42px;
`;
