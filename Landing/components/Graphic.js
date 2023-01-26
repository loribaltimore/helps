import Grid from '@mui/material/Grid';

function Graphic({graphic, text}) {


    return (
        <div>
            <Grid container>
                        <Grid item xs={4} style={{backgroundColor: 'white'}}>
                            <div className="graphicCircle" style={{textAlign: 'center', position: 'relative', left: '17.5%'}}>
                                {graphic}
                            </div>
                        </Grid>
                        <Grid item xs={8} style={{backgroundColor: 'white'}}>
                        <p stlye={{position: 'relative', top: '1rem', backgroundColor: 'white'}}>{text}</p>
                        </Grid>
                    </Grid>
        </div>
)
};

export default Graphic;