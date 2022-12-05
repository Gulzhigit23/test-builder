import { Clear,  } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTest } from "../../store/reducers/taskSlice";
import QuizVariants from "../SubQuiz/QuizVariants";

function QuizList({ question, variants, id, correctAnswerid }) {
  const dispatch = useDispatch();

  const removeTestHandler = (id) => {
    dispatch(removeTest(id));
  };
  return (
    <Container>
      
        <h1>{`${question} ?`}</h1>
        <Clear style={{ position:"relative", bottom:"60px", left:"150px" }} onClick={() => removeTestHandler(id)} />
     

      <QuizVariants
        correctAnswerId={correctAnswerid?.id}
        key={id}
        variants={variants}
        otherId={id}
      />
    </Container>
  );
}

export default QuizList;

const Container = styled.div`
  width: 400px;

  margin: auto;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;




