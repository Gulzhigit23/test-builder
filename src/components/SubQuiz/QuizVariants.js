/* eslint-disable no-undef */
import {
  
  Delete,
  Edit,
} from "@mui/icons-material";
import { Button,  TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addSubTest,
  answerOfTest,
  editinTest,
  removeSubTest,
} from "../../store/reducers/taskSlice";
import Checked from "./Checkbox";

function QuizVariants({ variants, otherId, correctAnswerId }) {
  const [showSubTask, setShowSubTask] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [enteredEdit, setEnteredEdit] = useState("");

  const dispatch = useDispatch();

  const changeButton = () => {
    setShowSubTask((prev) => !prev);
  };

  const changehandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const addSubData = () => {
    if (enteredTitle.trim().length > 0) {
      dispatch(
        addSubTest({
          value: enteredTitle,
          id: Math.random().toString(),
          mainId: otherId,
        })
      );
      setEnteredTitle("");
    }
  };

  const changeSubTestsValue = (value, id) => {
    setEditId(id);
    setEnteredEdit(value);
  };
  const saveNewSub = (id) => {
    dispatch(editinTest({ enteredEdit, id, otherId }));
    setEditId(null);
  };

  const removeSubTestHandler = (id) => {
    dispatch(removeSubTest({ testId: otherId, childrenId: id }));
  };
  const toggleHandle = (currentId) => {
    dispatch(answerOfTest({ currentId, otherId }));
  };
  return (
    <div>
      {showSubTask ? (
        <AddButton>
          <TextField
            size="small"
            className="input"
            type="text"
            value={enteredTitle}
            onChange={changehandler}
          />{" "}
          <Button variant="contained" size="small" onClick={addSubData}>
            add this variant
          </Button>
        </AddButton>
      ) : (
        <ControlButton>
          <Button
            className="open-input"
            variant="contained"
            onClick={changeButton}
          >
            I'd like to add some varinants
          </Button>
        </ControlButton>
      )}
      {variants.map((item) => {
        return (
          <ControrSubTools>
            {item.id === editId ? (
              <div>
                <input onChange={(e) => setEnteredEdit(e.target.value)} />
                <button onClick={() => saveNewSub(item.id)}>save</button>
              </div>
            ) : (
              <div>
                <div>{item.value}</div>
              </div>
            )}
            
            <Checked 
              checked={correctAnswerId === item.id}
              toggleHandle={toggleHandle}
              {...item}
            />
            <Delete className="icon"
              onClick={() => removeSubTestHandler(item.id)}
              style={{ color: "red" }}
            />
            <Edit className="icon" onClick={() => changeSubTestsValue(item.value, item.id)} />
          </ControrSubTools>
        );
      })}
    </div>
  );
}

export default QuizVariants;

const ControlButton = styled.div`
  & .open-input {
    margin-bottom: 50px;
  }
`;
const AddButton = styled.div`
  & .input {
    margin-bottom: 50px;
  }
`;

const ControrSubTools = styled.div`
display: flex;
position: relative;
left: 50px;
font-family: Arial, Helvetica, sans-serif;
& .icon{
  position: relative;
  left: 120px;
}
`;
