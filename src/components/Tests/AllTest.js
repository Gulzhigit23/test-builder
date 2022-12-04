import { CheckBox } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Checked from "../SubQuiz/Checkbox";

function AllTest() {
  const { test } = useSelector((state) => state.quiz);
  console.log(test,'tessssstt');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  return (
    <AnswerQuestions>
      {test.map((item) => {
        return (
          <>
            <div onClick={() => navigate(`/singleTest/${item.correctAnswerid.id}`)}>
              {/* <Btn>{item.question}</Btn> */}
              <Link to={item.id}>quations :{item.question}</Link>
            </div>
          </>
        );
      })}
    </AnswerQuestions>
  );
}

export default AllTest;

const AnswerQuestions = styled.div`
  width: 30rem;

  display: grid;
  background: rgba(131, 131, 146, 1);
  border-radius: 10px;
  margin: auto;
`;

const Btn = styled.button`
  color: red;
  height: 2rem;
  width: 30rem;
  background: oldlace;
`;
