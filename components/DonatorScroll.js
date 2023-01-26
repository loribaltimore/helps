import Grid from '@mui/material/Grid';
import { MainContext } from './MainContext';
import { useContext } from 'react';

function DonatorScroll(props) {
    let { donators } = useContext(MainContext);
    let scrollString = undefined;
    donators !== undefined ?
       scrollString = donators.map(x => x.username).join('') : '';
    console.log(scrollString);
    return (
        <div className='wrapper'>
            <div className="marquee" style={{ height: '5%', width: '61.8%', position: 'fixed', bottom: '0%', animation: 'marquee 59s linear infinite'}}>
                <p>{scrollString}</p>
            </div>
        </div>
        
    )
};

export default DonatorScroll;