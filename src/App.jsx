import { useState } from "react";
import styled from "styled-components";
import Main from "./Pages/Main";
import Registration from "./Pages/Registration";
import Form from "./Pages/Form";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "./Pages/Api";

function App() {
  const [file, setFile] = useState(localStorage.getItem("uploadedFile") || "");
  const [names, setNames] = useState(localStorage.getItem("userName") || "");
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
    setNames(newName);
  }

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/Registration"
          element={
            <Registration
              getFile={getFile}
              file={file}
              names={names}
              handleNameChange={handleNameChange}
              handleButtonClick={handleButtonClick}
            />
          }
        />
        <Route
          path="/Form"
          element={<Form Header={<Header file={file} names={names} />} />}
        />
        <Route
          path="/Api"
          element={<Api Header={<Header file={file} names={names} />} />}
        />
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
