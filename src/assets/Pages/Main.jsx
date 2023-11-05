import React, { useState } from "react";
import Stars from "../../Images/Main/stars.png";
import PngEgg from "../../Images/Main/pngegg.png";
import styled from "styled-components";

function Main(props) {
  return (
    <MainWrapper>
      <MainContainer>
        <div>
          <img src={PngEgg} alt="png" />
        </div>
        <TiTle>get started today</TiTle>
        <div>
          <Button onClick={props.hendlStarted}>get started</Button>
        </div>
      </MainContainer>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  background-image: url(${Stars});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TiTle = styled.h1`
  color: #4980c0;
  /* font-family: Rowdies; */
  font-size: 96px;
  text-transform: capitalize;
  margin: 66px 0;
`;
const Button = styled.button`
  color: #fff;
  /* font-family: Montserrat; */
  font-size: 24px;
  text-transform: capitalize;
  padding: 15px 40px;
  background-color: #4980c0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;