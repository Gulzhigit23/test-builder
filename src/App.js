import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./components/Home/Home";
import MainQuiz from "./components/Quiz/MainQuiz";
// import Notfound from './components/Notfound';
import QuizForm from "./components/Quiz/QuizForm";
import AllTest from "./components/Tests/AllTest";
import SingleTest from "./components/Tests/SingleTest";

function App() {
  const [isStart, setIsStart] = useState(false);
  return (
    <div className="App">
      <Routes>
      
        <Route path="/" index element={<MainQuiz />} />
        <Route path="/singleTest/:id" element={<SingleTest />} />
        <Route path="/allTest" element={<AllTest />} />
        <Route path="/test/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

const CreateQuestione = styled.button`
  width: 7rem;
  height: 2rem;
  border-radius: 10px;
  margin-top: 10rem;
`;

const GotoHome = styled.button`
  width: 7rem;
  height: 2rem;
  border-radius: 10px;
  position: absolute;
  left: 10rem;
  top: 10px;
`;
