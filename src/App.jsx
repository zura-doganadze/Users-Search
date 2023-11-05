import { useState } from "react";
import styled from "styled-components";
import Main from "./assets/Pages/Main";
import Registration from "./assets/Pages/Registration";
import Form from "./assets/Pages/Form";
import Header from "./assets/Components/Header"

function App() {
  const [started, setStarted] = useState(false);

  function hendlStarted() {
    setStarted(!started);
  }
  return (
    <>
      <Wrapper>
        < Form />
        {/* {started === true ? (
          <Registration />
        ) : (
          <Main hendlStarted={hendlStarted} />
        )} */}
        {/* <Main hendlStarted={hendlStarted} /> */}
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
