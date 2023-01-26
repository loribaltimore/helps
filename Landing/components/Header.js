import Grid from '@mui/material/Grid';
function Header(props) {


    return (
        <div>
           <Grid container style={{height: '35%', width: '100%', backgroundColor: 'lightblue', padding: '5%'}}>
           <div className="circle" style={{position: 'absolute', left: '38.75%', top: '4.5rem' }}></div>

                <Grid item xs={12}>
                <h1 className='stylized' style={{width: '35%', position: 'relative', left: '30%', textAlign: 'center', fontSize: '3rem', zIndex: '2', fontWeight: '100', margin: '0%', color: '#ff5757'}}>helps</h1>
            </Grid>
            <Grid item xs={12}>
                <h1 style={{ width: '50%', position: 'relative', left: '22.5%', margin: '0', textAlign: 'center', fontSize: '3rem', fontWeight: '100', margin: '0%'}}>Retail Reimagined</h1>
                </Grid>
                <Grid item xs={12}>
                    <p style={{width: '50%', textAlign: 'center', position: 'relative', left: '22.5%', fontSize: '18px'}}>Here at helps, we're reimagining the idea of "profit" and all the nasty connotations that
                    come along with it. What is the point of a business? What is "fair" compensation? What is "healthy"
                    growth?</p>
                </Grid>
        </Grid> 
        </div>
        
    )
};

export default Header;