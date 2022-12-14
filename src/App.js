
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import MainQuiz from "./components/Quiz/MainQuiz";
// import Notfound from './components/Notfound';

import AllTest from "./components/Tests/AllTest";
import SingleTest from "./components/Tests/SingleTest";

function App() {

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


