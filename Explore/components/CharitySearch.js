let axios = require('axios');
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function CharitySearch({setSearch, search, setOrgs, setIsExpand}) {

    let handleChange = (event) => {
        setSearch(event.target.value);
    };

    let handleKeyPress = async (event) => {
        if (event.key === 'Enter' && search !== '') {
            setIsExpand(false);
                await axios({
                    method: 'get',
                    url: `http://localhost:3000/charities/search?searchTerm=${search}`,
                }).then(data => { setOrgs(data.data.searchResults) }).catch(err => console.log(err))
        };
    };


    return (
        <Grid container onKeyDown={(event) => handleKeyPress(event)} style={{width: '30%'}}>
        <Grid item xs={9}>
        <input placeholder={`Search By Organization`} value={search} onChange={(event) => handleChange(event)} style={{padding: '2%'}} />
        </Grid>
            <Grid item xs={3}>
                <Button variant="contained">Search</Button>
            </Grid>

        </Grid>
    )
};

export default CharitySearch;
