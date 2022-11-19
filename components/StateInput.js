import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import allStates from '../seeding/allStates';
import { useState } from 'react';

function StateInput(props) {
    let { setState, state } = props;
    let [currState, setCurrState] = useState('');
    let handleChange = (event) => {
        setState(event.target.value);
    };
    return (
        <div>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">State</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={state}
    label="Age"
   onChange={(event) => handleChange(event)}>
            {
                        allStates.map(function (element, index) {
                        return <MenuItem value={element}>{element}</MenuItem>
                 })       
         }           
  </Select>
</FormControl>
        </div>
    )
};

export default StateInput;
