import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

const Api = () => {
  const [state, setState] = useState("");

  async function fetchAdvice() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
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

  return (
    <Wrapper>
      <Header />
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
    </Wrapper>
  );
};

export default Api;
const Wrapper = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 60px;
  margin: 100px 10%;
`;
const CardContainer = styled.div`
  color: black;
  max-width: 300px;
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
