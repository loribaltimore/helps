import Grid from '@mui/material/Grid';
import axios from 'axios';
import charityCauses from '../../util/charityCauses';
import CharitySearch from '../components/CharitySearch';
import CauseSearch from './CauseSearch';


function AltCause({searchResults, setSearchResults, setCause, setOrgs, setIsExpand, cause}) {

    let isResult = {
        true: 'magenta',
        false: 'black'
    }

    let handleClick = async (event) => {
        setIsExpand(false);
        setCause(event.target.innerText);
        await axios({
           method: 'get',
            url: `http://localhost:3000/explore/charities/${event.target.innerText}`,

        }).then(data => { setOrgs(data.data.nonprofits) }).catch(err => console.log(err));
   }


    return (
        <Grid container style={{ backgroundColor: 'white' }}>
            <Grid item xs={12}>
                <CauseSearch setSearchResults={setSearchResults}
                    setCause={setCause} setIsExpand={setIsExpand} cause={cause} />
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center'}}>
                {
                    charityCauses.slice(0, 16).map(function (element, index) {
                        let fontColor = searchResults.indexOf(element) > -1;
                        return <h4 style={{ cursor: 'pointer', color: isResult[fontColor] }} key={index} onClick={(event) => handleClick(event)}>{element}</h4>
                    })
                }
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center'}}>
                {
                    charityCauses.slice(17, 33).map(function (element, index) {
                        let fontColor = searchResults.indexOf(element) > -1;
                       return <h4 style={{cursor: 'pointer', color: isResult[fontColor]}} key={index} onClick={(event) => handleClick(event)}>{element}</h4>
                    })
                }
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center'}}>
                {
                    charityCauses.slice(34, 49).map(function (element, index) {
                        let fontColor = searchResults.indexOf(element) > -1;
                       return <h4 style={{cursor: 'pointer', color: isResult[fontColor]}} key={index} onClick={(event) => handleClick(event)}>{element}</h4>
                    })
                }
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center'}}>
                {
                    charityCauses.slice(50, 66).map(function (element, index) {
                        let fontColor = searchResults.indexOf(element) > -1;
                       return <h4 style={{cursor: 'pointer', color: isResult[fontColor]}} key={index} onClick={(event) => handleClick(event)}>{element}</h4>
                    })
                }
            </Grid>
        </Grid>
)
};

export default AltCause;