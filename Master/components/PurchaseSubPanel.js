import Grid from '@mui/material/Grid';
import { useState, setState } from 'react';
import ItemToFulfill from './ItemToFulfill'
import Received from './Received';
import Shipped from './Shipped';

function PurchaseSubPanel({donation}) {
  let { items } = donation.transaction;
  let [itemList, setItemList] = useState(items);


  let toDo = {
    'shirt': 'Screen Print Logo',
    'cap': 'Sew Patch',
    'hoodie': 'Sew Patch'
  };
    
    return (
      <Grid item xs={6} style={{ border: '2px solid black', borderRadius: '2rem', padding: '2%', maxHeight: '90%', overflow: 'scroll'}}>
        {
          itemList.map(function (element, index) {
            console.log(element);
            if (element.receiptNo === 'N/A') {
              return <ItemToFulfill item={element} donationId={donation._id} key={index} setItemList={setItemList}/>
            } else if (element.recieved === undefined) {
              return <Received item={element} setItemList={setItemList} donationId={donation._id} key={index}/>
            } else {
              return <Shipped item={element} donationId={donation._id} key={index} address={donation.transaction.shipTo} setItemList={setItemList} />
            }
            // else {
            //   return <div style={{backgroundColor: '#b5e48c', borderRadius: '2rem', height: '6rem'}}>
            //         <h1 style={{ color: '#6CBD26', position: 'relative', textAlign: 'center'}}>Fulfilled</h1>
            //     </div>
            // }
                }) 
            }
        </Grid>
    )
};

export default PurchaseSubPanel;

// create fulfillment of Purchase;