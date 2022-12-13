import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import likeCharity from '../functions/likeCharity';
import { MainContext } from '../../components/MainContext';
import { useContext } from 'react';

function CharityLike(props) {
    let { org, currentCause } = props
    let { currentUser } = useContext(MainContext);
    
    let handleClick = async () => {
        await likeCharity(currentUser._id, org, currentCause).then(data => console.log(data)).catch(err => console.log(err));

    };
    
    return (
        <div style={{width: '5rem', height: '15rem'}}>
            <VolunteerActivismOutlinedIcon style={{ fontSize: '3rem', color: 'lightpink' }} onClick={(event) => handleClick(event)}/>
        </div>
)
};

export default CharityLike;