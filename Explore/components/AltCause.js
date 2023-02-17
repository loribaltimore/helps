import Grid from '@mui/material/Grid';
import charityCauses from '../../util/charityCauses';
import CharitySearch from '../components/CharitySearch';

function AltCause({searchResults, setSearchResults, search, setSearch}) {

    let isResult = {
        true: 'magenta',
        false: 'black'
    }

    return (
        <Grid container style={{ backgroundColor: 'white' }}>
            <Grid item xs={12}>
                <CharitySearch setSearch={setSearch} setSearchResults={setSearchResults}
                    search={search} filter={'Causes'} />
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center'}}>
                {
                    charityCauses.slice(0, 16).map(function (element, index) {
                        let fontColor = searchResults.indexOf(element) > -1;
                        return <h4 style={{ cursor: 'pointer', color: isResult[fontColor] }} key={index}>{element}</h4>
                    })
                }
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center'}}>
                {
                    charityCauses.slice(17, 33).map(function (element, index) {
                        let fontColor = searchResults.indexOf(element) > -1;
                       return <h4 style={{cursor: 'pointer', color: isResult[fontColor]}} key={index}>{element}</h4>
                    })
                }
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center'}}>
                {
                    charityCauses.slice(34, 49).map(function (element, index) {
                        let fontColor = searchResults.indexOf(element) > -1;
                       return <h4 style={{cursor: 'pointer', color: isResult[fontColor]}} key={index}>{element}</h4>
                    })
                }
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'center'}}>
                {
                    charityCauses.slice(50, 66).map(function (element, index) {
                        let fontColor = searchResults.indexOf(element) > -1;
                       return <h4 style={{cursor: 'pointer', color: isResult[fontColor]}} key={index}>{element}</h4>
                    })
                }
            </Grid>
        </Grid>
)
};

export default AltCause;