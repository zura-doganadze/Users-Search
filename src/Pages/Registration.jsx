import React from "react";
import styled from "styled-components";
import AddImg from "../Images/Registration/add_a_photo_icon.svg";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Registration(props) {
  const { handleSubmit, register } = useForm();
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("uploadedFile");
    localStorage.removeItem("userName");

    props.getFile({ target: { files: [] } });
    props.handleNameChange({ target: { value: "" } });
  }, []);

  const onSubmit = (user) => {
    if (!props.file) {
      setErr(true);
      return;
    }

    if (!user.username) {
      setErr((cur) => !cur);
      console.log("sheiyvane saxeli");
      return;
    }

    navigate("/Form", { state: { key: "value" } });
  };

  return (
    <RegistrationWrapper>
      <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
        <h1>get started</h1>
        <AddSpan>add a photo</AddSpan>
        <ImgContainer>
          <input type="file" onChange={props.getFile} />
          {props.file ? (
            <img src={props.file} alt="img" />
          ) : (
            <AddImgt src={AddImg} alt="img" />
          )}
        </ImgContainer>
        <NameSpan>fill in your name</NameSpan>
        <div>
          <Input
            {...register("username")}
            type="text"
            placeholder="your name"
            value={props.names}
            onChange={props.handleNameChange}
          />
        </div>
        <ErrorSpan>{err && err && "Enter all data"}</ErrorSpan>
        <Button>sign in</Button>
      </RegistrationForm>
    </RegistrationWrapper>
  );
}
export default Registration;

const RegistrationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  margin: 5% 0;
`;
const RegistrationForm = styled.form`
  max-width: 794px;
  width: 100%;
  border-radius: 25px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  h1 {
    color: #000;
    font-size: 64px;
    text-transform: capitalize;
    margin: 52px 0px;
  }
`;
const ErrorSpan = styled.span`
  color: red;
  font-size: 18px;
  margin-bottom: 22px;
  font-weight: 700;
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
  margin-top: 20px;

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
const AddImgt = styled.img`
  max-width: 50px;
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
  border-radius: 12px;
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
