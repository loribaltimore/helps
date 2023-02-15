import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemConfiguration from './ItemConfiguration';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

function ItemAccordion({ setSelectedSize, setSelectedColor,
  selectedColor, sizeable, selectedSize, alert, setAlert, added, setAdded }) {
  
  const [expanded, setExpanded] = React.useState(false);
  let [isHover, setIsHover] = useState(undefined);
  let [isClicked, setIsClicked] = useState([]);


  useEffect(() => {
    if (added === true) {
       setExpanded(false);
      setAdded(false);
      setIsClicked([]);
     }
  });

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  let handlehover = (event) => {
    event.target.style.height = '3rem';
    setIsHover(event.target.style.backgroundColor);
    console.log(isHover);
    event.target.style.borderWidth = '3px';
    event.target.style.borderColor = 'red';
  };

  let handleleave = () => {
    event.target.style.height = '2rem';
    setIsHover(undefined);
    event.target.style.borderWidth = '1px';
    event.target.style.borderColor = 'black';
  };

  let handleClick = (color) => {
    let updatedColors = selectedColor.filter(x => x !== color);
    let updatedClicked = selectedColor.filter(x => x === color);
    setSelectedColor(updatedColors);
    setIsClicked(updatedColors);
    console.log(isClicked);
    // console.log(color);
    // console.log(selectedColor);
    // console.log(updatedColors);
  };

    return (
        <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '50%', flexShrink: 0 }}>
                Sizing and Palette
              </Typography>
            </AccordionSummary>
          <AccordionDetails>
          {
                alert === true ?
                  <h4 style={{color: 'red', marginTop: '0%', marginBottom: '1%'}}>Please select color and size</h4> : ''
              }
            <Grid container>
              <Grid item xs={6}>
                <ItemConfiguration
                  setSelectedSize={setSelectedSize} setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor} sizeable={sizeable}
                  isClicked={isClicked} setIsClicked={setIsClicked} setAlert={setAlert} alert={alert} /> 
              </Grid>
              <Grid item xs={6}>
              
                <Grid container >
                  <Grid item xs={6}>
                    <Grid container style={{position: 'relative', left: '25%'}}>
                    {
                  selectedColor.map(function (element, index) {
                    return <Grid item xs={6}
                      style={{ height: '2rem', maxWidth: '2rem', backgroundColor: element, border: '1px solid black', margin: '.5%', cursor: 'pointer' }}
                      onMouseEnter={(event) => handlehover(event)}
                      onMouseLeave={(event) => handleleave(event)}
                      onClick={() => handleClick(element)}
                    >
                      </Grid>
                  })
                  }
                    </Grid>
                  
                  </Grid>
                
                  {
                    selectedSize !== undefined ?
                    <Grid item xs={6} style={{  }}>
                    <h2
                      style={{ width: '2rem', height: '2rem', borderRadius: '50%',margin: '0%', border: '1px black solid', position: 'relative', left: '40%' }}
                    >
                      {selectedSize}</h2>
                    </Grid> : ''
                  }
                 
                </Grid>
                
              </Grid>
            </Grid>
          </AccordionDetails>
          </Accordion>
        </div>
      );
};

export default ItemAccordion;