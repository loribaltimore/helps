import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Cause from './Cause';
import charityCauses from '../functions/charityCauses.js';
import Pagination from '@mui/material/Pagination'
import { useState } from 'react';
function SelectCauses(props) {
    let [page, setPage] = useState(1);
    let causesToShow = [24*page,24*page+24]
    return (
        <div>
            <Container maxWidth="md" style={{ backgroundColor: 'darkblue', opacity: '50%', height: '50rem' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {charityCauses.slice(causesToShow[0], causesToShow[1]).map(function (element, index){
        return <Grid item xs={2} sm={4} md={4} key={index}>
        <Cause cause={element} />
      </Grid>
    })
   }
                </Grid>
                <Pagination count={10} color="primary" setPage={setPage}/>
        </Container>
        </div>
    )
};

export default SelectCauses;