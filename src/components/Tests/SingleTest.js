
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const SingleTest = () => {
  const { id } = useParams();
  const { test } = useSelector((state) => state.quiz);
  console.log(test, "testt");
  console.log(id, "dastan");
  const navigate = useNavigate()



  const showIsCoreHandler = (idAnswer) => {
    if (idAnswer === id) {
      return alert("you score 10/10");
    }
    return alert("you score 0/10");
  };
  return (
    <>
    <button onClick={() => navigate('/')}>Go to back</button>
         <Result>
      {test.map((item) => (
        <div>
          {item.variants.map((el) => (
            <Li
              style={{ cursor: "pointer" }}
              onClick={() => showIsCoreHandler(el.id)}
            >
              {el.value}
            </Li>
          ))}
         
        </div>
      ))}
     
    </Result>
    </>
   
  );
};

export default SingleTest;



const Li = styled.li`
list-style-type: none;
margin-top: 15px;
color: white;
`

const Result = styled.div`
 display: grid;
  grid-template-columns: 200px 200px 200px;
  margin: auto;
  justify-content: center;
 margin-top: 100px;
 width: 500px;
 background: gray;
`