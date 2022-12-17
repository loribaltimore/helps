import Grid from '@mui/material/Grid';
import LoadingLetter from './LoadingLetter';


function JustLoadBar(props) {

    let loading = '...Loading'; 
    let colors = ['#5AD238', '#37A6D2', '#B037D2', '#D26337', '#7678ed',
        '#5AD238', '#37A6D2', '#B037D2', '#D26337', '#7678ed'];

    return (
        <div style={{ backgroundImage: `url(${'/img/logo.jpeg'})`, backgroundSize: '10%', backgroundAttachment: 'fixed', backgroundPosition: 'center', height: '100rem' }}>
            <h1>
                <div style={{ backgroundColor: 'white' }}>
                    <Grid container>
                        {
                            loading.split('').map(function (element, index) {
                                return <Grid item xs={.4} key={index}>
                                    <LoadingLetter letter={element} color={colors[index]} index={index} />
                                </Grid>
                            })
                        }
                    </Grid>
                </div>
            </h1>
        </div>);
};

export default JustLoadBar;

