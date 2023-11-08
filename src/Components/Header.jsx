import React from "react";
import { useState } from "react";

import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import UserIBackground from "../Images/Header/imgBackground.png";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const Pages = ["Form", "Api"];
  const [popUp, setPopUp] = useState(false);

  const navigate = useNavigate();

  const openPopup = () => {
    setPopUp(true);
    console.log("zuradasd");
  };

  const closePopup = () => {
    setPopUp(false);
    console.log("asdaasdasd");
  };

  //user log out
  const handleLogOut = () => {
    // Clear user data from local storage
    localStorage.removeItem("uploadedFile");
    localStorage.removeItem("userName");

    // Navigate back to the registration page
    navigate("/Registration");
    navigate(0);
  };
  return (
    <MainWrapper>
      <Container>
        <ContentWrapper>
          <Nav>
            <Ul>
              {Pages.map((item, index) => {
                return (
                  <List key={index}>
                    <Adress
                      onClick={() =>
                        navigate(`/${item}`, { state: { key: "value" } })
                      }
                    >
                      {item}
                    </Adress>
                  </List>
                );
              })}
            </Ul>
          </Nav>
          <Line></Line>
          <NameWrapper>
            <Name>{props.names}</Name>
            <Img
              onClick={openPopup}
              src={props.file}
              alt="user img backgorund"
            />
          </NameWrapper>
        </ContentWrapper>
        {popUp && (
          <Popup>
            <PopUpWrapper>
              <CloseButton onClick={closePopup}>x</CloseButton>
              <img src={props.file} alt="user img" />
              <span>{props.names}</span>
              <LogOutButton onClick={handleLogOut}>log out</LogOutButton>
            </PopUpWrapper>
            <Overlay onClick={closePopup} />
          </Popup>
        )}
      </Container>
    </MainWrapper>
  );
}
export default Header;

const MainWrapper = styled.div`
  color: #ffffff;
  font-size: 44px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #fff;
`;
const Container = styled.div`
  max-width: 100%;
  width: 90%;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  border-bottom: none;
`;
const List = styled.li`
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
`;
const Adress = styled.a`
  cursor: pointer;
`;
const Line = styled.div`
  width: 2px;
  background: #fff;
  min-height: 120px;
  margin: 0 53px;
`;
const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  font-size: 18px;
  width: max-content;
`;
const Name = styled.span`
  font-size: 40px;
  margin-right: 47px;
  white-space: nowrap;
  cursor: pointer;
`;
const Img = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

//PopUpWrapper
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  position: absolute;

  padding: 80px 0 60px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  span {
    font-size: 22px;
    margin-top: 22px;
    color: black;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      filter: brightness(0.8);
    }
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  font-size: 25px;
  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;
const LogOutButton = styled.button`
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  padding: 10px 30px;
  margin-top: 70px;
  background-color: #4980c0;
  border: none;
  border-radius: 22px;
  cursor: pointer;

  &:hover {
    background-color: #3b6ea3;
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
