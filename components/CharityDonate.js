import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';
import { MainContext } from './MainContext';
import { useContext } from 'react';

function CharityDonate(props) {
    let { org, currentCause } = props
    let { currentUser } = useContext(MainContext);
    
    let handleClick = async () => {
        console.log('WAITING TO PROGRAM THIS FOR CHECKOUT');
    };
    
    return (
        <div style={{width: '2rem'}}>
            <TollTwoToneIcon style={{ fontSize: '3rem', color: 'goldenrod', cursor: 'pointer' }} onClick={(event) => handleClick(event)}/>
        </div>
)
};

export default CharityDonate;