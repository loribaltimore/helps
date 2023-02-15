import axios from 'axios';
import Button from '@mui/material/Button';

function Shipped({ item, address, donationId, setItemList }) {

    let { id, shipped } = item;


    let addressString = Object.values(address).join(' ');

    let handleClick = async () => {
        let response = await axios({
            method: 'post',
            url: 'http://localhost:3000/queue',
            data: {
                donationId,
                itemId: id,
                type: 'shipped'
            }
        }).then(data => { console.log(data); setItemList(data.data)}).catch(err => console.log(err));
    };

    
    return (
        <div>
        {
            typeof shipped !== 'number' ?
            <div>
            <h3>{addressString}</h3>
            <Button onClick={() => handleClick()}>Shipped</Button>
                    </div>
                    :
                    <div>
                        Shipped {shipped}!
                    </div>
        }
        </div>
    )
};

export default Shipped;