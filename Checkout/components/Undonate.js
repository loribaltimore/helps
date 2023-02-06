import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { MainContext } from '../../components/MainContext';
import { useContext } from 'react';
import { updateCoin, updatePool } from '../../Cart/functions/updateCart';

function Undonate(props) {
    let {org, cart, pool, setToPool} = props
    let { setCart } = useContext(MainContext);
    
    let isEnoughCoin = cart.coin.qty > 0;

    cart.toDonate.length ?
    console.log(cart.toDonate.filter(x => x.name === org.name)[0]):''

    let currentCoin =
        cart.toDonate.length && pool === false ?
            cart.toDonate.filter(x => x.name === org.name)[0].coinTotal > 2 : true;
    
    let possibleCoin = {
        true: 1,
        false: 2
    };

    let handleClick = async () => {
        if (pool === false) {
            console.log('CHARITY UN-DONATE IS CLICKED');
            await updateCoin(cart, org, possibleCoin[currentCoin])
                .then(data => {console.log('COIN UPDATED'); console.log(data); setCart(data)})
                    .catch(err => console.log(err));
        } else {
            if (cart.pool > 0) {
                await updatePool(cart, -possibleCoin[currentCoin])
                .then(data => {
                    {
                        setCart(data);
                        if (data.pool === 0) {
                            setToPool(undefined);
                        }
                    }
                }).catch(err => console.log(err));
            }
        }
    };

    let size = {
        false: '3',
        true: '2.5'
    };


    return (
        <CancelOutlinedIcon style={{ color: 'red', fontSize: `${size[isEnoughCoin]}rem`, cursor: 'pointer', position: 'relative' }}
                onClick={() => handleClick()}
            />
    )
};

export default Undonate;


// make sure undonate works
// proceed with checkout by adding prompt to add remainder to pool or add more funds
// to get full coin
// add charities to queue