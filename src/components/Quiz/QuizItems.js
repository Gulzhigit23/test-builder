import React from "react";
import { useSelector } from "react-redux";

import QuizList from "./QuizList";

function QuizItems() {
  const { test } = useSelector((state) => state.quiz);
 

  return (
    <div>
      {test.map((item) => {
        return (
          <>
            <QuizList
            key={item.id}
            id={item.id}
            question={item.question}
            {...item}
          />
          
          </>
          
        );
      })}
    </div>
  );
}

export default QuizItems;
