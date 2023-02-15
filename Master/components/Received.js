import Button from '@mui/material/Button';
import axios from 'axios';

function Received({ item, donationId, setItemList }) {

    let { id } = item;
    
    let handleClick = async () => {
        let response = await axios({
            method: 'post',
            url: 'http://localhost:3000/queue',
            data: {
                donationId,
                itemId: id,
                type: 'received'
            }
        }).then(data => { console.log(data); setItemList(data.data) }).catch(err => console.log(err));
    };

    return (
        <div>
                <h3>{item.receiptNo}</h3>
                <h4>{item.orderedFrom}</h4>
                  <Button onClick={() => handleClick()}>Recieved</Button>
                </div>
    )
};

export default Received;

// search bar to find orders in queue;