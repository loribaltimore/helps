import Grid from '@mui/material/Grid';
function CyclePanel({graphic, text, shift}) {
    let toWidth = 35 * shift + '%';
    let toShift = 32.5 / shift + '%';

    return (
        <div>
            
            <Grid container style={{ width: toWidth, position: 'relative', left: toShift}}>
                <Grid item xs={12}>
                    <div className="graphicCircle" style={{textAlign: 'center', position: 'relative', left: '35%'}}>
                        {graphic}
                    </div>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <div style={{ position: 'relative'}}>
                        {text}
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
};

export default CyclePanel;