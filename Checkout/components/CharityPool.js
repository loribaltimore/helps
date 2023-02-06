import PoolIcon from '@mui/icons-material/Pool';
import { updatePool} from '../../Cart/functions/updateCart';
import updateSession from '../../functions/updateSession';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CharityPool({setToPool, cart, setCart, setOpen}) {
    let [isPoolSet, setIsPoolSet] = useState(false);

    let handleClick = async () => { 
        if (cart.coin.qty > 0) {
            await updatePool(cart, 1)
                .then(data => { setCart(data) }).catch(err => console.log(err));
                if (isPoolSet === false) {
                    setIsPoolSet(true);
                    let poolCode = uuidv4();
                    setToPool(poolCode);
                    await updateSession('toPoolID', poolCode)
                        .then(data => { return data }).catch(err => console.log(err));
            };
            if (cart.pool === 0) {
                await updateSession('toPoolID', undefined)
                .then(data => { return data }).catch(err => console.log(err));
                setToPool(false);
            }
        } else {
            setOpen(true);
        }
    };

    return (
        <div>
            <PoolIcon style={{ color: 'blue', fontSize: '3rem', cursor: 'pointer' }} onClick={() => handleClick()} />
        </div>
    )
};

export default CharityPool;
