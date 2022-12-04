import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addTestValue } from "../../store/reducers/taskSlice";

function QuizForm() {
  const [value, setValue] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandle = (e) => {
    e.preventDefault();
    const data = {
      question: value,
      id: Math.random().toString(),
      variants: [],
      correctAnswerid: null,
    };
    if (value.trim().length > 0) {
      dispatch(addTestValue(data), setValue(""));
    }
  };
  return (
    <>
        <Skip onClick={() => navigate("/allTest")}>Show the Score</Skip>
      <form onSubmit={submitHandle}>
        <h2>Tema testa</h2>
        {/* <input value={value} onChange={(e) => setValue(e.target.value)} type="text" /> */}
        <TextField
          label="Create youre test"
          value={value}
          size="small"
          onChange={(e) => setValue(e.target.value)}
        />
        <SubmitButton>ADD</SubmitButton>
      </form>
    </>
  );
}

export default QuizForm;

const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background: #1976d2;
  margin-left: 20px;
  color: white;
  border: none;
  cursor: pointer;
  :active {
    background-color: lightblue;
  }

  :hover {
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
`;

const Skip = styled.button`
width: 150px;
height: 30px;
border-radius: 10px;
background: #1976d2;
color: white;
border: none;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

:active{
  background: lightblue;
}

`
