import { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import LoadingLetter from './LoadingLetter';
import Question from '../components/Question';
import fetchTrivia from '../functions/fetchTrivia';


function Loading(props) {
    let [currentQuestion, setCurrentQuestion] = useState(undefined);

    let loading = '...Loading'; 
    let colors = ['#5AD238', '#37A6D2', '#B037D2', '#D26337', '#7678ed',
        '#5AD238', '#37A6D2', '#B037D2', '#D26337', '#7678ed'];

        useEffect(() => {
            let getQuestion = async (setCurrentQuestion) => {
                await fetchTrivia().then(data => { setCurrentQuestion(data) }).catch(err => console.log(err));
            };
            getQuestion(setCurrentQuestion);
        }, []);
    
    return (
        <div style={{backgroundImage: `url(${'/img/logo.jpeg'})`, backgroundSize: '10%', backgroundAttachment: 'fixed', backgroundPosition: 'center', height: '100rem'}}>
                <h1>
                    <div style={{backgroundColor: 'white'}}>
                        <Grid container>
                    {
                                loading.split('').map(function (element, index) {
                                   return <Grid item xs={.4} key={index}>
                                       <LoadingLetter letter={element} color={colors[index]} index={index}/>
                            </Grid> 
                        })    
                    }
                        </Grid>
                    </div>
            </h1>
            <div style={{paddingLeft: '20%', paddingRight: '20%'}}>

                        <Question currentQuestion={currentQuestion}/>
                    
              
            </div>
            <div style={{paddingLeft: '20%', paddingRight: '20%', textAlign: 'center', position: 'relative', top: '15rem'}}>
            {
                currentQuestion !== undefined ?
                        <h1 style={{  transform: 'rotate(180deg) scaleX(-1'}}>{currentQuestion.correctAnswer}</h1>
                        : ''
            }
            </div>
            
                
            </div>
        
    )
};

export default Loading;


//trivia loading game;