import { useState } from "react";
import styled from "styled-components";
import Main from "./Pages/Main";
import Registration from "./Pages/Registration";
import Form from "./Pages/Form";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "./Pages/Api";

function App() {
  const [started, setStarted] = useState(false);

  function hendlStarted() {
    setStarted(!started);
    console.log("first");
  }
 
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/Api" element={<Api />} />

      </Routes>
    </>

    //  {/* {started === true ? (
    //   <Registration />
    // ) : (
    //   <Main hendlStarted={hendlStarted} />
    // )} */}
    // {/* <Main hendlStarted={hendlStarted} /> */}
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
