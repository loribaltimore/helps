let axios = require('axios');
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import charityCauses from '../../util/charityCauses';
import Button from '@mui/material/Button';

function CharitySearch({setSearch, search, filter, setSearchResults, setOrgs}) {

    let handleChange = (event) => {
        setSearch(event.target.value);
    };

    let filterCauses = () => {
        let searchTerm = new RegExp(search, 'ig');
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
        console.log('IS WORKING');
        console.log(search);
        if (event.key === 'Enter' && search !== '') {
            filter === 'Organization' ?
                await axios({
                    method: 'get',
                    url: `http://localhost:3000/charities/search?searchTerm=${search}`,
                }).then(data => { console.log(data.data); setOrgs(data.data.searchResults) }).catch(err => console.log(err))
                :
                filterCauses();
        };
    };

    return (
        <Grid container onKeyDown={(event) => handleKeyPress(event)} style={{width: '30%'}}>
        <Grid item xs={9}>
        <input placeholder={`Search By ${filter}`} value={search} onChange={(event) => handleChange(event)} style={{padding: '2%'}} />
        </Grid>
            <Grid item xs={3}>
                <Button variant="contained">Search</Button>
            </Grid>

        </Grid>
    )
};

export default CharitySearch;
