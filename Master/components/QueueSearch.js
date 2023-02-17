import axios from 'axios';
import { useState } from 'react';
import FilterBtn from './FilterBtn';
import Grid from '@mui/material/Grid';

function QueueSearch({setCurrentQueue}) {
    let [search, setSearch] = useState('');
    let [filter, setFilter] = useState('Name');
    let [isBlue, setIsBlue] = useState();

    let handleChange = (event) => {
        setSearch(event.target.value);
    };

    let handleClick = (event) => {
        setFilter(event.target.id);
        // setIsBlue(event.target);
        // event.target.style.backgroundColor = 'blue';
    };
        
    let handleKeyPress = async (event) => {
        console.log('IS WORKING')
        if (event.key === 'Enter' && search !== '') {
            let response = await axios({
                method: 'get',
                url: 'http://localhost:3000/queue',
                params: {
                    search,
                    filter
                }
            }).then(data => { console.log(data.data); setCurrentQueue(data.data.searchResults) }).catch(err => console.log(err));
        }
    };



    return (
        <Grid container onKeyDown={(event) => handleKeyPress(event)} style={{width: '22%'}}>
            <Grid item xs={10}>
            <input placeholder={`Search By ${filter}`} value={search} onChange={(event) => handleChange(event)} style={{padding: '2%'}} />
            </Grid>
            <Grid item xs={2}>
                <FilterBtn setFilter={setFilter}/>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                <div style={{backgroundColor: 'white', cursor: 'pointer'}} id="Name" onClick={(event) => handleClick(event)}>Name</div>
                </Grid>
                <Grid item xs={4}>
                <div style={{backgroundColor: 'white', cursor: 'pointer'}} id="Receipt #" onClick={(event) => handleClick(event)}>Receipt</div>
                </Grid>
                <Grid item xs={4}>
                <div style={{backgroundColor: 'white', cursor: 'pointer'}} id="Manufacturer" onClick={(event) => handleClick(event)}>Location</div>
                </Grid>
            </Grid>
        </Grid>
)
};

export default QueueSearch;