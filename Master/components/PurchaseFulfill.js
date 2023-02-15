import axios from 'axios';
import { useState } from 'react';

function PurchaseFulfill({ item, donationId, setItemList }) {
    
    let { id } = item;
    let [receiptNo, setReceiptNo] = useState('');
    let [orderedFrom, setOrderedFrom] = useState('');
    let [purchaseSubmit, setPurchaseSubmit] = useState(false);

    let handleChangeReceipt = (event) => {
        setReceiptNo(event.target.value);
    };

    let handleChangeFrom = (event) => {
        setOrderedFrom(event.target.value);
    };

    let handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setPurchaseSubmit(true);
        }
    };

    let handleSubmit = async () => {
        let response = await axios({
            method: 'post',
            url: 'http://localhost:3000/queue',
            data: {
                receiptNo,
                orderedFrom,
                donationId,
                itemId: id,
                type: 'purchase'
            }
        }).then(data => {  setItemList(data.data) }).catch(err => console.log(err));
    }

    return (
        <div style={{ height: '6rem' }}>
            {
                purchaseSubmit === false ?
                    <div>
            <input style={{height: '2.5rem'}} placeholder="Receipt No." value={receiptNo} onChange={(event) => handleChangeReceipt(event)} onKeyDown={(event) => handleKeyPress(event)}/>
            <input style={{height: '2.5rem'}} placeholder="Ordered From" value={orderedFrom} onChange={(event) => handleChangeFrom(event)} onKeyDown={(event) => handleKeyPress(event)}/>
                    </div>
                    :
                    <div>
                        <button onClick={() => handleSubmit()}>Ordered</button>
                        <button onClick={() => setPurchaseSubmit(false)}>Cancel</button>
                    </div>
            }
        </div>
    )
};

export default PurchaseFulfill;


// purchase fulfill => submit form to update item within 
// queue to reflect that it is fulfilled 