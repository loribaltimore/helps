import Grid from '@mui/material/Grid';
import { useState } from 'react';


function ItemConfiguration({currentUser, setSelectedSize, setSelectedColor, selectedColor, sizeable, isClicked, setIsClicked, setAlert, alert}) {
    // let { tier } = currentUser.membership;
    //make sizeable a prop;
    let tier = 'low';

    console.log('SIZEABLE' + sizeable)
    let possibleColors = {
        bottom: ['#ff5757', '#5ce1e6'],
        low: ['blue', 'orange'],
        middle: ['pink', 'tan'],
        top: ['white', 'black']
    };

    let hover = {
        true: '3rem',
        false: '2rem'
    };

    let clicked = {
        true: '3px green solid',
        false: '1px black solid'
    };

    let allTiers = Object.keys(possibleColors).filter(function (element, index) {
        let tierIndex = Object.keys(possibleColors).indexOf(tier);
        if (index <= tierIndex) {
            return element;
        }
    });

    let usableColors = allTiers.map(function (element, index) {
        return possibleColors[element]
    }).join(',').split(',');

    let length = 12 / usableColors.length;

    let handlehover = (event) => {
        event.target.style.height = '3rem'
    }

    let handleleave = () => {
        event.target.style.height = '2rem'
    };

    let handleClick = (event) => {
        alert === true ?
            setAlert(false) : '';
        if (selectedColor.length === 0) {
            setSelectedColor([event.target.style.backgroundColor]);
           setIsClicked([event.target.style.backgroundColor])   
        } else if (selectedColor.length === 1) {
            setSelectedColor([selectedColor[0], event.target.style.backgroundColor]);
            setIsClicked([...isClicked, event.target.style.backgroundColor]); 
        };
    };

    let handleChange = (event) => {
        alert === true ?
        setAlert(false) : '';
        console.log(event.target.value);
        setSelectedSize(event.target.value);
    };

    return (

        <Grid container style={{height: `${2}rem`, maxWidth: `${12}rem`, marginBottom: '2rem'}}>
            {
                usableColors.map(function (element, index) {

                    return <Grid item xs={length}
                        key={index}
                        style={{ height: '2rem', maxWidth: '2rem', backgroundColor: element, border: clicked[isClicked.indexOf(element) > -1], margin: '.5%', cursor: 'pointer' }}
                        onMouseEnter={(event) => handlehover(event)}
                        onMouseLeave={(event) => handleleave(event)}
                        onClick={(event) => handleClick(event)}
                    ></Grid>

                })
            }
            <Grid item xs={12}>
            {
                sizeable === true ?
                    <Grid container>
                            <Grid item xs={3} style={{}}>
                                <input name={'size'} type={'radio'} value={'s'} onChange={(event) => handleChange(event)} />
                                <label htmlFor={'s'}>S</label>

                            </Grid>
                            <Grid item xs={3} style={{}}>
                                <input name={'size'} type={'radio'} value={'m'} onChange={(event) => handleChange(event)} />
                                <label htmlFor={'m'}>M</label>

                            </Grid>
                            <Grid item xs={3} style={{}}>
                                <input name={'size'} type={'radio'} value={'l'} onChange={(event) => handleChange(event)} />
                                <label htmlFor={'l'}>L</label>

                            </Grid>
                            <Grid item xs={3} style={{}}>
                                <input name={'size'} type={'radio'} value={'xl'} onChange={(event) => handleChange(event)} />
                                <label htmlFor={'xl'}>XL</label>

                            </Grid>
                        </Grid>: ''
            }
        </Grid>
        </Grid>
    )
};

export default ItemConfiguration;

//I have to change how sizes and quantities are handled in the cart;
//qty per size;
//handleClick;