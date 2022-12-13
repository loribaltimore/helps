import { useState } from 'react';

function LoadingLetter(props) {
    let [currentColor, setCurrentColor] = useState('magenta');
    let { letter, color, index } = props;

    setTimeout(() => {
        setCurrentColor(color)
    }, (index + 1) * 500);
    
    return (
            <p style={{color: currentColor, textAlign: 'center', fontSize: '3rem', margin: '0%'}}>{letter}</p>
    )
};

export default LoadingLetter;