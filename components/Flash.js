import { MainContext } from '../components/MainContext';
import { useContext } from 'react';
import Alert from '@mui/material/Alert';

function Flash(props) {
    let { flash, setFlash } = useContext(MainContext);

    return (
        <div>
            {
                flash.msg !== undefined ?
                <Alert severity={flash.type} onClose={() => {setFlash({msg: undefined, type: undefined})}}>{flash.msg}</Alert> : ''
            }
        </div>
    )
};

export default Flash;

//flash seems to be finished
///create landing page design
//understand how to donate via charity API;
///integrate stripe