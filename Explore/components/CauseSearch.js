import charityCauses from '../../util/charityCauses';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function CauseSearch({setSearchResults, setCause, setIsExpand, cause}) {

    let handleChange = (event) => {
        setCause(event.target.value);
    };

    let filterCauses = () => {
        let searchTerm = new RegExp(cause, 'ig');
        setSearchResults(charityCauses.filter(function (element, index) {
            console.log(searchTerm, element);
            if (searchTerm.test(element) === true) {
                console.log('THIS IS TRUE');
                return element
            } else {
                console.log('THIS IS FALSE', searchTerm.test(element));
            }
        }));
    };

    let handleKeyPress = async (event) => {
        if (event.key === 'Enter' && cause !== '') {
            filterCauses();
        };
    };

    return (
        <Grid container onKeyDown={(event) => handleKeyPress(event)} style={{width: '30%'}}>
        <Grid item xs={9}>
        <input placeholder={`Search By Causes`} value={cause} onChange={(event) => handleChange(event)} style={{padding: '2%'}} />
        </Grid>
            <Grid item xs={3}>
                <Button variant="contained">Search</Button>
            </Grid>

        </Grid>
    )
};

export default CauseSearch;