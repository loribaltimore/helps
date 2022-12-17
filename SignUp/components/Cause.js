import Container from '@mui/material/Container';
import {useContext} from 'react';
import { SignUpContext } from '../components/SignUpContext';

function Cause(props) {
    let { interests, setInterests } = useContext(SignUpContext);
    let { cause } = props;
    let styles = {
        selected: { color: 'lightgreen' },
        unselected: {color: 'lightgray'}
    };
    let styleStatus = styles.unselected;
    if (interests !== undefined) {
        if (interests.indexOf(cause) > -1) {
            styleStatus = styles.selected;
        };
    };
    let handleClick = (event) => {
        if (interests === undefined) {
            setInterests([event.target.innerText]);
        } else {
            setInterests([...interests].concat(event.target.innerText));
        }
    };
    return (
        <div>
            <div style={{ height: '3rem', width: '15rem', backgroundColor: styleStatus.color, cursor: 'pointer',  }}>
                <Container maxWidth="sm" style={{textAlign: 'center', position: 'relative', top: '30%'}}>
                    <h4  onClick={(event) => handleClick(event)}>{cause}</h4>
                    </Container>
            </div>
        </div>
        
    )
};

export default Cause;

///handleClick line 20
//why cant I add values to interested? turns into an object and cant access as an array.
//this will contain all new users interests as we create new profile for them.