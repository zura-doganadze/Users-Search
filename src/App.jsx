import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import Main from "./assets/Pages/Main";
import Registration from "./assets/Pages/Registration";
import Form from "./assets/Pages/Form";

function App() {
  const [started, setStarted] = useState(false);

  function hendlStarted() {
    setStarted(!started);
  }
  return (
    <>
      <Wrapper>
        {/* {started === true ? (
          <Registration />
        ) : (
          <Main hendlStarted={hendlStarted} />
        )} */}
        {/* <Main hendlStarted={hendlStarted} /> */}
        <Form />
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
