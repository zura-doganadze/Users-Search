import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

//img
import ChevLeft from "../Images/Api/chevron-left.svg";
import ChevLefts from "../Images/Api/chevrons-left.svg";
import ChevRight from "../Images/Api/chevron-right.svg";
import ChevRights from "../Images/Api/chevrons-right.svg";

function Api(props) {
  const [state, setState] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state == null) {
      navigate("/Registration");
    }
  }, []);
  console.log(location.state);
  console.log(navigate);

  async function fetchAdvice(startIndex) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=10
        `
      );

      if (!response.ok) {
        throw new Error("There was error while fetchig data");
      }

      const data = await response.json();

      console.log(data);
      setState(data);
    } catch (Error) {
      console.log(Error);
    }
  }
  useEffect(() => {
    fetchAdvice();
  }, []);

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Wrapper>
      {props.Header}
      <CardWrapper>
        {state !== "" &&
          state.map((item, index) => (
            <CardContainer key={index}>
              <div>
                <Title>{item.title}</Title>
              </div>
              <div>
                <Text>{item.body}</Text>
              </div>
            </CardContainer>
          ))}
      </CardWrapper>
      <NamberWrapper>
        <img src={ChevLefts} alt="cheveron img" />
        <img src={ChevLeft} alt="cheveron img" />
        <NamberContainer>
          {pages.map((page, index) => {
            const startIndex = page === 1 ? 0 : page * 10 - 10;
            console.log(startIndex);
            return (
              <p
                key={index}
                onClick={() => fetchAdvice(startIndex)}
                style={{ color: "white" }}
              >
                {page}
              </p>
            );
          })}
        </NamberContainer>
        <img src={ChevRight} alt="cheveron img" />
        <img src={ChevRights} alt="cheveron img" />
      </NamberWrapper>
    </Wrapper>
  );
}

export default Api;
const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 60px;
  column-gap: 20px;
  margin: 100px 5%;
`;
const CardContainer = styled.div`
  color: black;
  max-width: 300px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 18px 20px;
  cursor: pointer;
`;
const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  min-height: 90px;
`;
const Text = styled.p`
  font-size: 16px;
  text-align: left;
`;
const NamberWrapper = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;

`
const NamberContainer = styled.div`
  display: flex;
  /* max-width: 50px; */
  /* overflow-x: auto; */
  column-gap: 7px;
  font-size: 20px;
  p {
    cursor: pointer;
  }
`;
