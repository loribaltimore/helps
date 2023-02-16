import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

function FilterBtn({setFilter}) {
    let [isRender, setIsRender] = useState(false);

    let handleClick = () => {
        setIsRender(true);
    };

    let handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            {
                isRender === false ?
                <FilterListIcon style={{ fontSize: '2rem' }} onClick={() => handleClick()} />
                    :
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type="radio" name='filter' value="Name" onChange={(event) => handleChange(event)} />
                        <label htmlFor='receiptNo'>Receipt #</label>
                        <input type="radio" name='filter' value="Receipt #" onChange={(event) => handleChange(event)} />
                        <label htmlFor='orderedFrom'>Ordered From</label>
                        <input type="radio" name='filter' value="Manufacturer" onChange={(event) => handleChange(event)}/>
                    </div>
            }
        </div>
    )
};

export default FilterBtn;