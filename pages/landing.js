import Button from '@mui/material/Button';
import { MainContext } from '../components/MainContext';
import { useContext } from 'react';
import SelectCauses from '../components/SelectCauses';

function Landing(props) {
    let { test } = useContext(MainContext);

    return (
        <div>
            <SelectCauses />
            {/* <img src='/LandingPageImg.jpeg' style={{width: '50%',}} /> 
            <Button variant="contained">Hola</Button> */}
        </div>
    )
};

export default Landing;