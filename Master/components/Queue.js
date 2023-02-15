import Pagination from '@mui/material/Pagination';
import QueuePanel from './QueuePanel';
import axios from 'axios';
import { useState } from 'react';
import getQueue from '../functions/getQueue';

function Queue({ officialQueue, officialHistory }) {
    let [currentQueue, setCurrentQueue] = useState(officialQueue);
    let [currentPage, setCurrentPage] = useState(1);
    
    let handleClick = async (event) => {
        setCurrentPage(parseInt(event.target.innerText));
        await getQueue(parseInt(event.target.innerText)).then(data => { console.log(data); setCurrentQueue(data) }).catch(err => console.log(err));
        window.scroll(0, 0);
    };
    
    return (
        <div>
            {
                currentQueue.map(function (element, index) {
                    let historyAmt = 0;
                    officialHistory[element.org.name] !== undefined ?
                        historyAmt = officialHistory[element.org.name] : '';
                    return <QueuePanel donation={element} setCurrentQueue={setCurrentQueue} currentPage={currentPage} setCurrentPage={setCurrentPage} key={index} historyAmt={historyAmt} />
            })
            }
            <Pagination count={10} color="primary" style={{cursor: 'pointer'}} onClick={(event) => handleClick(event) }/>
        </div>
    )
};

export default Queue;