import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Cause from './Cause';
import charityCauses from '../functions/charityCauses.js';
import Pagination from '@mui/material/Pagination'
import { useState, useContext } from 'react';
import { SignUpContext } from '../components/SignUpContext';


function SelectCauses(props) {
    let { setRenderBio, setRenderInterests } = props;
    let [page, setPage] = useState(1);
    let {interests} = useContext(SignUpContext);
    let causesToShow = [12 * (page - 1), 12 * (page - 1) + 12];

    let handleChange = (event) => {
        let pageNum = event.nativeEvent.path[1].innerText;
        setPage(pageNum);
    };
    let handleClick = () => {
        setRenderBio(true);
        setRenderInterests(false);
    }

    return (
        <div style={{border: '1px lightgray solid'}}>
            <Container maxWidth="md" style={{padding: '2%'}}>
            <h1 style={{padding: '1%'}}>What are you passionate about ?</h1>
                <div style={{ backgroundColor: 'darkblue', opacity: '50%', height: '25rem', paddingLeft: '2.5%' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            charityCauses.slice(causesToShow[0], causesToShow[1]).map(function (element, index) {
                            return <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Cause cause={element} />
                                    </Grid>
                    })
                        }
                    </Grid>
                </div>
                <Pagination count={6} color="primary" onChange={(event) => { handleChange(event) }} style={{position: 'relative', left: '32%', marginTop: '1%'}}/>
                {
                    interests && interests.length >= 5 ?
                <Button variant="contained" onClick={() => handleClick()} style={{ position: 'relative', left: '42%', marginTop: '1%' }}>
                Add Interests
                    </Button> : ''
            }
            </Container>
        </div>
    )
};

export default SelectCauses;