import React from "react";
import styled from "styled-components";
import AddImg from "../Images/Registration/add_a_photo_icon.svg";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Registration() {
  const navigate = useNavigate();
  const [file, setFile] = useState(localStorage.getItem("uploadedFile") || "");
  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [isButtonClicked, setButtonClicked] = useState(false);

  function getFile(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      localStorage.setItem("uploadedFile", URL.createObjectURL(selectedFile));
      setFile(URL.createObjectURL(selectedFile));
    }
  }

  function handleNameChange(event) {
    const newName = event.target.value;
    localStorage.setItem("userName", newName);
    setName(newName);
  }

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <RegistrationWrapper>
      <RegistrationContainer>
        <h1>get started</h1>
        <AddSpan>add a photo</AddSpan>
        <ImgContainer>
          <input type="file" onChange={getFile} />
          <img src={file} alt="" />
        </ImgContainer>
        <NameSpan>fill in your name</NameSpan>
        <div>
          <Input
            type="text"
            placeholder="your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <span>{name}</span>
        <Button
          onClick={
            (handleButtonClick,
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #e6ebff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 35px 0 55px 0;
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
