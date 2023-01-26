import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';
import { MainContext } from '../../components/MainContext';
import { useContext, useState } from 'react';
import { updateCoin } from '../../Cart/functions/updateCart';
import myCache from '../../util/myCache';

function CharityDonate(props) {
    let {  org} = props
    let { setCart, cart, setRenderPool } = useContext(MainContext);
    let [pulse, setPulse] = useState(false);
    
    let handleClick = async () => {
        console.log('CHARITY DONATE IS CLICKED');
        if (cart.coin.qty >= 1) {
                await updateCoin(cart, org, -2)
                    .then(data => {
                        console.log('COIN UPDATED');
                        console.log(data);
                        data.coin.qty < 1 ?
                            setRenderPool(true) : '';
                        setCart(data)
                    })
            .catch(err => console.log(err));
        };
    };

    let coinSize = {
        true: '2rem',
        false: '3rem'
    };

    let pulseFunc = () => {
        setTimeout(() => {
            setPulse(!pulse);
            pulseFunc();
        }, 2000)
    };

    pulseFunc();

    
    
    return (
        <div style={{ width: '2rem' }}>
            <TollTwoToneIcon style={{ fontSize: coinSize[pulse], color: 'goldenrod', cursor: 'pointer' }} onClick={() => handleClick()}/>
        </div>
)
};

export default CharityDonate;