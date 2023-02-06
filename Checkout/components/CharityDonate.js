import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';
import { MainContext } from '../../components/MainContext';
import { useContext, useState } from 'react';
import { updateCoin } from '../../Cart/functions/updateCart';


function CharityDonate(props) {
    let { org, setOpen} = props
    let { setCart, cart, setRenderPool } = useContext(MainContext);

    
    let handleClick = async () => {
        console.log('CHARITY DONATE IS CLICKED');
        if (cart.coin.qty >= 2) {
            console.log('ONE')
                await updateCoin(cart, org, -2)
                    .then(data => {
                        console.log('COIN UPDATED');
                        console.log(data);
                        data.coin.qty < 1 ?
                            setRenderPool(true) : '';
                        setCart(data)
                    })
            .catch(err => console.log(err));
        } else {
            console.log('TWO')
            setOpen(true);
        }
    };

    return (
        <div style={{ width: '2rem' }}>
            <TollTwoToneIcon style={{ fontSize: '3rem', color: 'goldenrod', cursor: 'pointer' }} onClick={() => handleClick()}/>
        
        
        </div>
)
};

export default CharityDonate;