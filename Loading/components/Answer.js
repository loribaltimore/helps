import { useState } from 'react';


function Answer(props) {
    let { answer, setAnswer, incorrect, isClicked, setIsClicked, setIsCorrect, setIsLoaded } = props;
    let [hasShadow, setHasShadow] = useState(true);
    let styles = {
        radius: {
            true: '2.5px 2.5px lightgray',
            false: ''
        },
        width: {
            true: '100%',
            false: '98%'
        },
        final: {
            true: {
                true: 'pink',
                false: 'lightgreen'
            },
            false: {
                true: '#5ce1e6',
                false: '#5ce1e6'
            }
        }
    };

    let handleClick = (event) => {
        if (incorrect == false) {
            setIsCorrect(true);
        };
        setHasShadow(false);
        setTimeout(() => {
            setHasShadow(true);
        }, 200);
        setTimeout(() => {
            setIsClicked(true);
            setAnswer(event.target.innerText);
        }, 500);
        setTimeout(() => {
            setIsLoaded(true);
        }, 3500)
    }

    return (
        <div style={{width: styles.width[hasShadow], height: '2rem', border: '1px solid #ff5757', borderRadius: '2.5rem', marginBottom: '2%', backgroundColor: styles.final[isClicked][incorrect], cursor: 'pointer', boxShadow: styles.radius[hasShadow]}}
        onClick={(event) => handleClick(event)} >
            <h5 style={{margin: '0%', color: '#ff5757'}}>{answer}</h5>
        </div>
    )
};

export default Answer;