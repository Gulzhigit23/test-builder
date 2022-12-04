

import { Link } from 'react-router-dom'
import QuizForm from './QuizForm'
import QuizItems from './QuizItems'

function MainQuiz() {
 
  return (
    <div>
        <QuizForm/>
        <QuizItems/>
    </div>
  )
}

export default MainQuiz