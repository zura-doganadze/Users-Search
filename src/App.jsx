import { useState } from "react";
import styled from "styled-components";
import Main from "./Pages/Main";
import Registration from "./Pages/Registration";
import Form from "./Pages/Form";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "./Pages/Api";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/" element={<Main />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Api" element={<Api />} />
      </Routes>
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
