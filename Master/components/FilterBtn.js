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
                <FilterListIcon style={{ fontSize: '2rem' }} onClick={() => handleClick()} />
        </div>
    )
};

export default FilterBtn;