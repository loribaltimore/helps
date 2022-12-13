import { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import LoadingLetter from '../Loading/LoadingLetter';

function Loading(props) {
    let loading = '...Loading'; 
    let colors = ['#5AD238', '#37A6D2', '#B037D2', '#D26337', '#7678ed',
        '#5AD238', '#37A6D2', '#B037D2', '#D26337', '#7678ed'];

    return (
        <div style={{height: '5rem', backgroundColor: 'lightblue'}}>
                <h1>
                    <div>
                        <Grid container ref={msgRef}>
                    {
                                loading.split('').map(function (element, index) {
                                   return <Grid item xs={.5} key={index}>
                                       <LoadingLetter letter={element} color={colors[index]} index={index}/>
                            </Grid> 
                        })    
                    }
                        </Grid>
                    </div>
                </h1>
            </div>
        
    )
};

export default Loading;


//trivia loading game;