import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import likeCharity from '../functions/likeCharity';
import { MainContext } from '../../components/MainContext';
import { useContext } from 'react';
import { ExploreContext } from './ExploreContext';

function CharityLike(props) {
    let { org } = props;
    let { currentCause, setAllLiked} = useContext(ExploreContext);
    let { currentUser } = useContext(MainContext);
    
    let handleClick = async () => {
        console.log(currentCause);
        await likeCharity(currentUser._id, org, currentCause).then(data => { setAllLiked(data.allLiked)}).catch(err => console.log(err));
    };
    
    return (
        <div style={{width: '5rem', height: '15rem'}}>
            <VolunteerActivismOutlinedIcon style={{ fontSize: '3rem', color: 'lightpink', cursor: 'pointer' }} onClick={(event) => handleClick(event)}/>
        </div>
)
};

export default CharityLike;