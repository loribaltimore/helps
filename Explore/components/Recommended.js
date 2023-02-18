import Grid from '@mui/material/Grid';
import CharityCard from './CharityCard';
import Pagination from '@mui/material/Pagination';


function Recommended({ allRecs, pageCalc, allLiked }) {
    
    let handleChange = (event) => {
        setCurrentPage(parseInt(event.target.innerText));
        window.scrollTo(0, 0);
    };
    
    return (
        <Grid container> 
        {
                allRecs.slice(pageCalc, pageCalc + 10).map(function (element, index) {
                    let liked = false;
                    if (allLiked.indexOf(element.name) > -1) {
                        liked = true;
                    };
                                if (index % 2 === 0) {
                                   return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                       <CharityCard org={element} cardType={'like'} liked={liked}/>
                                        </Grid>
                                } else {
                                    return  <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                        <CharityCard org={element} cardType={'like'} liked={liked}/>
                                        </Grid>
                                         }
                            
                            })       
        }
            <Pagination count={3} color="primary" onChange={(event) => handleChange(event)} />
        </Grid>
    )
};

export default Recommended;