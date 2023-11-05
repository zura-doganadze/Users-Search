import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import Main from "./assets/Pages/Main";
function App() {
  return (
    <>
      <Wrapper>
        <Main />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  min-height: 100vh;
`;
