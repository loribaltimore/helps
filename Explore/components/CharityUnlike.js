import axios from 'axios';
import unlikeCharity from '../functions/unlikeCharity';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { ExploreContext } from './ExploreContext';
import { useContext } from 'react';


function CharityUnlike(props) {
    let { org, handlehover, handleleave } = props;
    let {  currentCause, setAllLiked } = useContext(ExploreContext);

    let handleClick = async() => {
        await unlikeCharity(org, currentCause)
            .then(data => { setAllLiked(data.allLiked) }).catch(err => console.log(err));
    };

    return (
        <div>
            <HeartBrokenIcon style={{ color: 'red', fontSize: '3rem', cursor: 'pointer' }}
                onClick={() => handleClick()}
                onMouseEnter={() => handlehover()}
                onMouseLeave={() => handleleave()} />
        </div>
    )
};

export default CharityUnlike;