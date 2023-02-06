import PostAddIcon from '@mui/icons-material/PostAdd';
import FormatListNumberedRtlSharpIcon from '@mui/icons-material/FormatListNumberedRtlSharp';
import Grid from '@mui/material/Grid';

function MasterNav({ setIsQueue }) {
    
        return (
            <div style={{paddingBottom: '10%'}}>
                    <nav style={{height: '4rem', backgroundColor: '#5ce1e6', marginBottom: '2%', width: '10%', borderRadius: '5rem', position: 'fixed', left: '57.5%', zIndex: '1', boxShadow: '4px 4px gray'}}>
                    <Grid container style={{position: 'relative', top: '.75rem', paddingLeft: '1%'}}>
                                <Grid item xs={6} style={{textAlign: 'center'}}>
                            <PostAddIcon style={{ fontSize: '2rem', color: '#ff5757', cursor: 'pointer' }} onClick={() => setIsQueue(false)} />
                                </Grid>
                                <Grid item xs={6} style={{textAlign: 'center'}}>
                                    <FormatListNumberedRtlSharpIcon style={{fontSize: '2rem', color: '#ff5757', cursor: 'pointer'}} onClick={() => setIsQueue(true)}/>
                        </Grid>
                    </Grid>
                </nav> 
            </div>
        )
};

export default MasterNav;