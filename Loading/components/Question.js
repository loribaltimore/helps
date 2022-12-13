import { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';
import Answer from './Answer';

function Question(props) {
    let { currentQuestion } = props;
    let [isCorrect, setIsCorrect] = useState(false);
    let [answer, setAnswer] = useState(undefined);
    let [isClicked, setIsClicked] = useState(false);

    let phrases = {
        true: { msg: 'CORRECT!!!', color: 'lightblue' },
        false: { msg: 'WRONG!!!', color: 'red' }
    };

    return (
        <div style={{ textAlign: 'center', border: '2px solid lightblue', backgroundColor: 'white', boxShadow: '5px 5px lightgray'}}>
            <div style={{height: '5rem'}}>
            {
                currentQuestion !== undefined && answer === undefined ?
                    <h2>{currentQuestion.question}</h2> : <h1 style={{color: phrases[isCorrect].color}}>{phrases[isCorrect].msg}</h1>
            }
           </div>
            <Divider />
            <div style={{paddingLeft: '20%', paddingRight: '20%', paddingBottom: '5%', paddingTop: '5%'}}>
            {
                currentQuestion !== undefined ?
                    currentQuestion.incorrectAnswers.map(function (element, index) {
                        return <Answer answer={element} setAnswer={setAnswer} incorrect={true} setIsClicked={setIsClicked} isClicked={isClicked}/>
                   }) : ''
            }
            {
                currentQuestion !== undefined ?
                        <Answer answer={currentQuestion.correctAnswer} setAnswer={setAnswer} incorrect={false} setIsClicked={setIsClicked} isClicked={isClicked} setIsCorrect={setIsCorrect}/> : ''
            }
            </div>
            
        </div>
    )
};

export default Question;

