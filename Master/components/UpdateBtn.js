import axios from 'axios';
import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { MasterContext } from './MasterContext';

function UpdateBtn(props) {
    let { setRenderDelete, setIsUpdating, isUpdating } = props;
    
    return (
        <div>
            {
                isUpdating === false ?
            <Button variant="contained" style={{ position: 'relative', left: '15%', marginTop: '1%'}} onClick={() => {setIsUpdating(true); setRenderDelete(false)}}>Update</Button>
            : ''
        }
        </div>
    )
};

export default UpdateBtn;

