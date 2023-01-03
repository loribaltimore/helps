import axios from 'axios';
import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { MasterContext } from './MasterContext';
import Divider from '@mui/material/Divider';

function DeleteBtn(props) {
    let { product, setRenderUpdate } = props;
    let { setAllProducts } = useContext(MasterContext);
    let [isSure, setIsSure] = useState(false);

    let handleClick = async (id) => {
        let response = await axios({
            method: 'delete',
            url: 'http://localhost:3000/products',
            data: {
                id: product._id
            }
        }).then(data => { setAllProducts(data.data) }).catch(err => console.log(err));
    };

    return (
        <div>
            {
                isSure === false ?
                <Button
                        variant="contained"
                        style={{ backgroundColor: 'red', position: 'relative', left: '15%' }}
                        onClick={() => {setIsSure(!isSure); setRenderUpdate(false)}}>
                            Delete
                </Button>
                    :
                <div style={{textAlign: 'center'}}>
                    <h2>Are you Sure</h2>
                        <Button variant="contained" style={{ backroundColor: 'red', marginRight: '1%' }} onClick={() => { handleClick(); setRenderUpdate(true); setIsSure(!isSure);}}>Yes</Button>
                        <Button variant="contained" style={{backroundColor: 'green'}} onClick={() => {setIsSure(!isSure); setRenderUpdate(true)}}>Back</Button>
                </div>

            }
        </div>
    )
};

export default DeleteBtn;