import Pagination from '@mui/material/Pagination';
import QueuePanel from './QueuePanel';
import { useState } from 'react';

function Queue({ officialQueue }) {
    let [currentQueue, setCurrentQueue] = useState(officialQueue.slice(0, 20));
    let [currentPage, setCurrentPage] = useState(1);
    console.log(currentPage);
    console.log(currentQueue);

    let handleClick = (event) => {
        setCurrentPage(parseInt(event.target.innerText));
        setCurrentQueue(officialQueue.slice(currentPage*10, (currentPage*10) + 20))
    };

    return (
        <div>
            {
                currentQueue.map(function (element, index) {
                    return <QueuePanel donation={element} setCurrentPage={setCurrentPage} key={index} />
            })
            }
            <Pagination count={10} color="primary" style={{cursor: 'pointer'}} onClick={(event) => handleClick(event) }/>
        </div>
    )
};

export default Queue;