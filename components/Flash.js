
import Alert from '@mui/material/Alert';

function Flash({ flash, setRenderFlash }) {
    let { success, error, info } = flash;
    let flashType = Object.keys(flash)[0];
    let flashMsg = flash[flashType][0];
 
    return (
        <div style={{marginBottom: '3%'}}>
            {
                 flashType !== undefined ?
                    <Alert severity={flashType} onClose={() => {setRenderFlash(false)}}>{flashMsg}</Alert> : ''
            }
        </div>
    )
};

export default Flash;
